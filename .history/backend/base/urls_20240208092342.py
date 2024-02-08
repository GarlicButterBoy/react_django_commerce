from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name=)
    path('', views.getRoutes, name="routes" ),
    path('products/', views.getProducts, name="products" ),
    path('products/<str:pk>/', views.getProduct, name="product" ),
]