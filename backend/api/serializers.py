from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework import exceptions

User = get_user_model()

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        identifier = attrs.get(self.username_field)
        password = attrs.get('password')

        # Allow login via username 
        user = User.objects.filter(
            Q(username__iexact=identifier) 
        ).first()

        if user and user.check_password(password):
            if not user.is_active:
                raise exceptions.AuthenticationFailed('User account is disabled.')
            # Normalize to canonical username for SimpleJWT validation
            attrs[self.username_field] = user.username

        return super().validate(attrs)

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['role'] = user.role
        token['username'] = user.username 
        return token