from django.contrib.auth import get_user_model, password_validation
from django.contrib.auth.models import BaseUserManager
from rest_framework import serializers
from rest_framework.authtoken.models import Token

User = get_user_model()


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','email','password','name', 'is_active', 'is_staff')
        extra_kwargs = {
            'password':{'write_only': True},
        }

        # def create(self, validated_data):
        #     user = User.objects.create_user(validated_data['username'],
        #                                     password=validated_data['password'],
        #                                     first_name=validated_data['first_name'],
        #                                     last_name=validated_data['last_name'])
        #     return user

# User serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class UserLoginSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=300, required=True)
    password = serializers.CharField(required=True, write_only=True)


class AuthUserSerializer(serializers.ModelSerializer):
    auth_token = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = (
            'id',
            'email',
            'name',
            'is_active',
            'is_staff',
            'auth_token',
        )
        read_only_fields = (
            'id',
            'is_active',
            'is_staff',
        )

    def get_auth_token(self, obj):
        try:
            token = Token.objects.get(user_id=obj.id)
        except:
            token = Token.objects.create(user=obj)
        return token.key


class EmptySerializer(serializers.Serializer):
    pass


class UserRegisterSerializer(serializers.ModelSerializer):
    """
    A user serializer for registering the user
    """

    class Meta:
        model = User
        fields = ('id', 'email', 'password')

    def validate_email(self, value):
        user = User.objects.filter(email=value)
        if user:
            raise serializers.ValidationError("Email is already taken")
        return BaseUserManager.normalize_email(value)

    def validate_password(self, value):
        password_validation.validate_password(value)
        return value


class PasswordChangeSerializer(serializers.Serializer):
    current_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

    def validate_current_password(self, value):
        if not self.context['request'].user.check_password(value):
            raise serializers.ValidationError('Current password does not match')
        return value

    def validate_new_password(self, value):
        password_validation.validate_password(value)
        return value
