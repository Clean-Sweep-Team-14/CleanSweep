# Generated by Django 4.1.2 on 2022-10-21 17:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0011_chore_tracker_completed_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='chore_tracker',
            name='completed_date',
        ),
    ]
