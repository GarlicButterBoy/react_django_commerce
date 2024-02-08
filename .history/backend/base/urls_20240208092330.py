from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('api/token/')
    path('', views.getRoutes, name="routes" ),
    path('products/', views.getProducts, name="products" ),
    path('products/<str:pk>/', views.getProduct, name="product" ),
]