// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'write_response.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

WriteResponse _$WriteResponseFromJson(Map<String, dynamic> json) {
  return WriteResponse(json['result'] as int, json['insertedId'] as int);
}

Map<String, dynamic> _$WriteResponseToJson(WriteResponse instance) =>
    <String, dynamic>{
      'result': instance.result,
      'insertedId': instance.insertedId
    };
