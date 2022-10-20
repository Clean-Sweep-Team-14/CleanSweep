# Generated by Django 4.1.2 on 2022-10-18 20:56

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_alter_chore_tracker_completed_at'),
    ]

    operations = [
        migrations.RenameField(
            model_name='chore_tracker',
            old_name='day',
            new_name='due_date',
        ),
        migrations.AlterField(
            model_name='chore_tracker',
            name='completed_at',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2022, 10, 18, 16, 56, 18, 368102), null=True),
        ),
    ]
