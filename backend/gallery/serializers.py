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
    user = serializers.ReadOnlyField(source='user.username')
    images = ImageSerializer(many=True, read_only=True)

    class Meta:
        model = Album
        fields = '__all__'