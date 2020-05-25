// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'comment.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Comment _$CommentFromJson(Map<String, dynamic> json) {
  return Comment(
      json['BC_Code'] as int,
      json['BC_Content'] as String,
      json['BC_Creation_Date'] as String,
      json['BC_RE_REF'] as int,
      json['Board_BO_Code'] as int);
}

Map<String, dynamic> _$CommentToJson(Comment instance) => <String, dynamic>{
      'BC_Code': instance.BC_Code,
      'BC_Content': instance.BC_Content,
      'BC_CREATION_DATE': instance.BC_Creation_Date,
      'BC_RE_REF': instance.BC_RE_REF,
      'Board_BO_Code': instance.Board_BO_Code
    };
