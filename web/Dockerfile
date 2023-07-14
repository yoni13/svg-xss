FROM python:3.10
WORKDIR /app
ADD . /app
ARG BOT_HOST=ctf1-backend.onrender.com
ARG BOT_PORT=10000
USER daemon 
RUN pip install -r /app/requirements.txt
ENTRYPOINT ["python", "/app/main.py"]
