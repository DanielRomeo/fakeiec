# Generated by Django 4.1.7 on 2024-06-16 16:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('voteapp', '0002_voter_gender'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vote',
            name='national',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='vote',
            name='provincial',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='vote',
            name='regional',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
