# Generated by Django 4.1.2 on 2022-10-18 19:29

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_alter_chore_tracker_completed_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chore_tracker',
            name='completed_at',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2022, 10, 18, 15, 29, 43, 759063), null=True),
        ),
    ]
