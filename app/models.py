from django.db import models
from django.utils import timezone


class Post(models.Model):
    author = models.ForeignKey('auth.User')
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class Dish(models.Model):
    id_category = models.ForeignKey(
        'Category',
        on_delete=models.CASCADE,
    )
    id_vendor = models.ForeignKey(
        'Vendor',
        on_delete=models.CASCADE,
    )
    id_dish = models.SmallIntegerField(unique=True)
    name = models.CharField(max_length=200)
    description = models.TextField()

    def publish(self):
        self.save()

    def __str__(self):
        return self.name

class Category(models.Model):
    id_category = models.SmallIntegerField(unique=True)
    name = models.CharField(max_length=200)
    image = models.FileField(upload_to="categories")

    def publish(self):
        self.save()

    def __str__(self):
        return self.name

class Vendor(models.Model):
    id_vendor = models.SmallIntegerField(unique=True)
    name = models.CharField(max_length=200)

    def publish(self):
        self.save()

    def __str__(self):
        return self.name

class Product(models.Model):
    id_dish = models.ForeignKey(
        'Dish',
        on_delete=models.CASCADE,
    )
    weight = models.SmallIntegerField()
    price = models.FloatField()
    id_product = models.SmallIntegerField(unique=True)

    AVAILABLE = (
        ("Сегодня", 'Today'),
        ("Завтра", 'Tomorrow'),
    )

    available = models.CharField(
        max_length=10,
        choices=AVAILABLE,
        default="Today",
    )
    def publish(self):
        self.save()
        
    def __str__(self):
        return str(self.id_dish)

class Image(models.Model):
    id_dish = models.ForeignKey(
        'Dish',
        on_delete=models.CASCADE,
    )
    image = models.ImageField()

    def publish(self):
        self.save()

    def __str__(self):
        return str(self.id_dish)
        