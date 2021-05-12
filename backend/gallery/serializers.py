from rest_framework import serializers
from .models import Album, Image
from django.contrib.auth import get_user_model

User = get_user_model()


class ImageSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Image
        fields = '__all__'


class AlbumSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.email')
    images = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = Album
        fields = ('id', 'title', 'description', 'user', 'images', 'status')


class UserSerializer(serializers.ModelSerializer):
    albums = AlbumSerializer(many=True, read_only=True)
    images = ImageSerializer(many=True, read_only=True)

    class Meta:
        """
        albums: The associated Albums to this User.
        images: The associated Photos to this User.
        """
        model = User
        fields = ('id','email', 'name', 'albums', 'images')