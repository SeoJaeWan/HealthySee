// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'board.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

PostDetail _$PostDetailFromJson(Map<String, dynamic> json) {
  return PostDetail(
      json['BO_TITLE'] as String,
      json['BO_CONTENT'] as String,
      json['BO_REPORT_COUNT'] as int,
      json['BO_HEALTHSEE_COUNT'] as int,
      json['BO_COMMENT_COUNT'] as int,
      BO_HIT: json['BO_HIT'] as int,
      BO_CREATION_DATE: json['BO_CREATION_DATE'] as String,
      BO_CODE: json['BO_CODE'] as int)
    ..loading = json['loading'] as bool
    ..comments = (json['comments'] as List)
        ?.map((e) =>
            e == null ? null : Comment.fromJson(e as Map<String, dynamic>))
        ?.toList();
}

Map<String, dynamic> _$PostDetailToJson(PostDetail instance) =>
    <String, dynamic>{
      'BO_CODE': instance.BO_CODE,
      'BO_TITLE': instance.BO_TITLE,
      'BO_CONTENT': instance.BO_CONTENT,
      'BO_CREATION_DATE': instance.BO_CREATION_DATE,
      'BO_HIT': instance.BO_HIT,
      'BO_REPORT_COUNT': instance.BO_REPORT_COUNT,
      'BO_HEALTHSEE_COUNT': instance.BO_HEALTHSEE_COUNT,
      'BO_COMMENT_COUNT': instance.BO_COMMENT_COUNT,
      'loading': instance.loading,
      'comments': instance.comments
    };
