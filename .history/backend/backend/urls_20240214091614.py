
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    #path('api/', include('base.urls')),
    path('api/products/', include('base.urls.product_urls')),
    path('api/users', include('base.urls.users_urls')),
    path('api/', include('base.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)