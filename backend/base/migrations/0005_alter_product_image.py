# Generated by Django 5.0.1 on 2024-03-13 14:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0004_alter_product_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="product",
            name="image",
            field=models.ImageField(
                blank=True, default="/sample.jpg", null=True, upload_to=""
            ),
        ),
    ]