from django.shortcuts import render
from .models import Image, Album
from .serializers import ImageSerializer, AlbumSerializer
from rest_framework import generics, permissions, status
from rest_framework import status
from rest_framework.response import Response
from .permissions import IsOwnerOrReadOnly
from rest_framework.decorators import api_view
from rest_framework.reverse import reverse


@api_view(['GET'])
def api_root(request, format=None):
    """
    This is the base API Endpoint
    """
    return Response({
        'albums': reverse('album-list', request=request, format=format),
        'photos': reverse('photo-list', request=request, format=format)
    })


class ImageList(generics.ListCreateAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    perimission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ImageDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly)


class AlbumList(generics.ListCreateAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class AlbumDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def delete(self, request, *args, **kwargs):
        album = self.get_object()
        if album.images.exists():
            return Response({'permission': 'You cannot delete an Album that has phots.'},
                            status=status.HTTP_400_BAD_REQUEST)
        else:
            album.delete()