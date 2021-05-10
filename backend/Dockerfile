FROM python:3.9
LABEL key="Rabbil Yasar"

ENV PYTHONBUFFERED 1

COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt

RUN mkdir /appm
WORKDIR /app
COPY ./app /app

RUN useradd -ms /bin/bash user
USER user