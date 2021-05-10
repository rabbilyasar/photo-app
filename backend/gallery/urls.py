from django.urls import path
from . import views


urlpatterns = [
    # path('', views.api_root),
    path('albums', views.AlbumList.as_view(), name='album-list'),
    path('albums/<int:pk>', views.AlbumDetail.as_view()),
    path('images', views.ImageList.as_view(), name='images-list'),
    path('images/<int:pk>', views.ImageDetail.as_view())
]