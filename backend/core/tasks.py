from celery import shared_task
from django.core.mail import send_mail
from config import settings
from config.celery import app




@shared_task
def send_email_task():
    send_mail(
        from_email='cleansweepgameinfo@gmail.com',
        recipient_list='cleansweepgameinfo@gmail.com'
        )

    return None

@app.task
def send_test_email():
    send_mail(
        subject='CleanSweep',
        message='Welcome to CleanSweep!!!!',
        from_email='',
        recipient_list=['cleansweepupdates@gmail.com',]
    )