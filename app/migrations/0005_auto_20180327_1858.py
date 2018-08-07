# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-03-27 15:58
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_auto_20180327_1845'),
    ]

    operations = [
        migrations.CreateModel(
            name='Images',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('weight', models.SmallIntegerField()),
                ('price', models.SmallIntegerField()),
                ('id_product', models.SmallIntegerField(unique=True)),
                ('available', models.CharField(choices=[('Сегодня', 'Today'), ('Завтра', 'Tomorrow')], default='Сегодня', max_length=2)),
            ],
        ),
        migrations.AlterField(
            model_name='category',
            name='name',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='dish',
            name='name',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='name',
            field=models.CharField(max_length=200),
        ),
        migrations.AddField(
            model_name='products',
            name='id_dish',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.Dish'),
        ),
        migrations.AddField(
            model_name='images',
            name='id_dish',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.Dish'),
        ),
    ]