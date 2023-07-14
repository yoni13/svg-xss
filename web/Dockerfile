FROM python:3.10
RUN pip install -r requirements.txt
ARG BOT_HOST=ctf1-backend.onrender.com
ARG BOT_PORT=10000
USER daemon 
ENTRYPOINT ["python", "/app/main.py"]
