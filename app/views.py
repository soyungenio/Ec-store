from django.shortcuts import render
from app.models import *

def index(request):
    data = Category.objects.all()
    return render(request, 'index.html', {"categories": data})

def menu(request):
    #data = Category.objects.all()
    id = request.GET.get('id')
    return render(request, 'menu.html', {"id": id})