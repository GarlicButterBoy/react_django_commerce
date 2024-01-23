from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes" ),
    path('products/', views.getProducts, name="products" ),
    path('product/', views.getProducts, name="products" ),
]