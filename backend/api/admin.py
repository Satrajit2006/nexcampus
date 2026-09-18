from django.contrib import admin
from .models import User, StudentProfile

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'full_name', 'role', 'university_id', 'is_staff', 'is_active')
    list_filter = ('role', 'is_staff', 'is_active')
    search_fields = ('username', 'full_name', 'university_id')

@admin.register(StudentProfile)
class StudentProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'admission_id', 'course', 'session_year')
    search_fields = ('user__username', 'admission_id', 'course')
