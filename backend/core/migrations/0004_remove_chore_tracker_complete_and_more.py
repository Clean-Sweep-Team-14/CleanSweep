# Generated by Django 4.1.2 on 2022-10-18 16:14

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_alter_follow_friend_alter_follow_unique_together'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='chore_tracker',
            name='complete',
        ),
        migrations.AddField(
            model_name='chore_tracker',
            name='completed_at',
            field=models.DateTimeField(default=datetime.datetime(2022, 10, 18, 12, 14, 19, 737571)),
        ),
    ]
