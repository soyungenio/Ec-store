# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-03-27 15:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_auto_20180327_1841'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='name',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='name',
            field=models.TextField(),
        ),
    ]
