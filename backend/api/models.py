from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
#baseuser abstractbaseuser and permissionMixin are needed to hash and create custom fields

class CustomUserManager(BaseUserManager):
    def create_user(self, username, full_name, role, university_id, password=None):
        if not username:
            raise ValueError('The Username must be set')

        user = self.model(
            username=username,
            full_name=full_name,
            role=role,
            university_id=university_id
        )
        
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, full_name, role, university_id, password=None):
        user = self.create_user(
            username=username,
            full_name=full_name,
            role=role,
            university_id=university_id,
            password=password
        )
        # Grant admin permisions
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


#database structure
class User(AbstractBaseUser, PermissionsMixin):
    ROLES= (
        ('STUDENT', 'Student'),
        ('PROFESSOR', 'Professor'),
        ('STAFF', 'Staff'),
    )

    username = models.CharField(max_length=150, unique=True)
    university_id = models.CharField(max_length=50, unique=True)
    full_name = models.CharField(max_length=150)
    role = models.CharField(max_length=20, choices=ROLES)
    
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    # Link the custom manager to this model
    objects = CustomUserManager()


    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['full_name', 'role', 'university_id']

    def __str__(self):
        return f"{self.full_name} ({self.username})"
class StudentProfile(models.Model):
    user = models.OneToOneField(
        User, 
        on_delete=models.CASCADE, 
        related_name='student_profile'
    )
    
    
    admission_id = models.CharField(max_length=50, unique=True)
    registration_number = models.CharField(max_length=50, unique=True, null=True, blank=True)
    course = models.CharField(max_length=100)
    session_year = models.CharField(max_length=4)

    def __str__(self):
        return f"{self.user.full_name} - {self.course} ({self.session_year})"
