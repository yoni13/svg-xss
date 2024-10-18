# Use a Python base image with the desired version (e.g., 3.9)
FROM python:3.9-slim

# Set the working directory within the container
WORKDIR /app

# Copy the requirements.txt file (if you have dependencies)
COPY requirements.txt .

# Install dependencies from the requirements.txt file
RUN pip install -r requirements.txt

# Copy your Python script file (replace "your_script.py" with your actual filename)
COPY . .

# Set the command to run your Python script when the container starts
CMD ["python", "app.py"]
