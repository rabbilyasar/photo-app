from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):
    """Custom permission to only allow owners of an object to edit it.
    """
    def has_object_permission(self, request, view, obj):
        # Read permission are allowed to any request
        if request.method in permissions.SAFE_METHODS:
            return True

        # wrtie permission are only allowed to the user assigned to the object.
        return obj.user == request.user