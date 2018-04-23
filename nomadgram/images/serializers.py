from rest_framework import serializers
from . import models
from nomadgram.users import models as useer_models
from taggit_serializer.serializers import (TagListSerializerField, TaggitSerializer)


class SmallImageSerializer(serializers.ModelSerializer):
    """used for notification"""
    class Meta:
        model = models.Image
        fields = (
            'file',
        )

class CountImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Image
        fields = (
            'id',
            'file',
            'like_count',
            'comment_count'
        )

class FeedUserSerializer(serializers.ModelSerializer):

    class Meta:
        model=useer_models.User
        fields = (
            'username',
            'profile_image',
        )


class CommentSerializer(serializers.ModelSerializer):

    creator = FeedUserSerializer(read_only=True)

    class Meta:
        model = models.Comment
        fields = (
            'id',
            'message',
            'creator',
            'image'
        )

class LikeSerializer(serializers.ModelSerializer):

    class Meta:
        model=models.Like
        fields='__all__'



class ImageSerializer(TaggitSerializer, serializers.ModelSerializer):

    tags = TagListSerializerField()
    comments=CommentSerializer(many=True)    #image=models.ForeignKey(Image, null=True, related_name='comments')  comment_set -> comments
    creator=FeedUserSerializer()
    
    class Meta:
        model =  models.Image
        fields = (
            'id',
            'file',
            'location',
            'caption',
            'comments',
            'like_count',
            'creator',
            'natural_time',
            'tags',
        )
    
class InputImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Image
        fields = (
            'file',
            'location',
            'caption',
        )