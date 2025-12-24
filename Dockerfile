FROM python:3.11-slim
WORKDIR /app
RUN pip install --no-cache-dir flask
COPY . .
EXPOSE 5000
CMD ["python", "app.py"]

# WORKDIR /app

# RUN pip install --no-cache-dir flask gunicorn

# COPY . .

# EXPOSE 5000

# CMD ["gunicorn", "-b", "0.0.0.0:5000", "app:app"]
