from celery import shared_task
from django.core.mail import send_mail
from config import settings



@shared_task
def send_email_task():
    send_mail('Test', [cleansweepgameinfo@gmail.com])

    return None

