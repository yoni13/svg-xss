
import base64, hashlib

from flask import Flask, request, render_template, make_response, redirect, url_for, Response, send_from_directory
from dotenv import load_dotenv
import os
import requests
import re

load_dotenv()

app = Flask(__name__)
from werkzeug.utils import secure_filename

ALLOWED_EXTENSIONS = set(['ico', 'png', 'jpg', 'jpeg', 'gif', 'svg'])
UPLOAD_FOLDER = './temp'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

BOT_HOST = os.getenv('BOT_HOST')
print(BOT_HOST)

@app.route('/')
def home():
    username = request.cookies.get('username')
    if not username:
        return redirect(url_for('login'))
    return render_template('home.html', username=username)


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        user = request.form['username']
        resp = make_response(redirect(url_for('home')))
        resp.set_cookie('username', user, httponly=True)
        return resp
    return render_template('login.html', username=request.cookies.get('username'))


@app.route('/logout')
def logout():
    resp = make_response(redirect(url_for('home')))
    resp.set_cookie('username', '', expires=0)
    return resp


@app.route('/report', methods=['GET', 'POST'])
def report():
    username = request.cookies.get('username')
    if not username:
        return redirect(url_for('login'))
    if request.method == 'POST':
        file = request.files['file']
        if file and allowed_file(file.filename):
            img_key = hashlib.md5(file.read()).hexdigest()
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], img_key+'.'+filename.split('.')[1]))

        try:
            r = requests.get('https://'+BOT_HOST+'/?report=https://CTF1.onrender.com/upload/' + img_key)
            return r.text
        except Exception as e:
            print(e)
            return Response('Something is wrong...', status=500)
    return render_template('report.html', username=username)

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'],
                               filename)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050, debug=True)
