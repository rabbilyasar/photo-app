from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Album(models.Model):
    PUBLIC = 'public'
    PRIVATE = 'private'

    status_choices = [
        (PUBLIC, 'Public'),
        (PRIVATE, 'Private')
    ]

    title = models.CharField(max_length=100)
    description = models.CharField(max_length=255, null=True, blank=True)
    user = models.ForeignKey(User, related_name='albums', on_delete=models.CASCADE)
    status = models.CharField(max_length=50, choices=status_choices, default=PUBLIC)

    def __str__(self) -> str:
        return self.title


class Image(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='images/')
    album = models.ForeignKey(Album, related_name='images', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='images', on_delete=models.CASCADE)
    url = models.URLField(null=True, blank=True)
    thumbnailUrl = models.URLField(null=True, blank=True)

    def __str__(self) -> str:
        return self.title





