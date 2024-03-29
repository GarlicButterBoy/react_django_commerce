from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .products import products

# Create your views here.
@api_view([])

def getRoutes(request):

    routes = [
        '/api/products/',
        '/api/products/create/',

        '/api/products/upload/',

        '/api/products/<id>/reviews/',

        '/api/products/top/',
        '/api/products/<id>/',

        '/api/products/delete/<id>',
        '/api/products/<update>/<id>/',
    ]
    return JsonResponse(routes, safe=False)

def getProducts(request):
    return JsonResponse(products, safe=False)