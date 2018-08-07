from django.contrib import admin
from .models import *

admin.site.register(Post)
admin.site.register(Dish)
admin.site.register(Category)
admin.site.register(Vendor)
admin.site.register(Product)
admin.site.register(Image)