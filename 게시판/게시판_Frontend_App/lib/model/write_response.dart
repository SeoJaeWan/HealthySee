import 'package:json_annotation/json_annotation.dart';

part 'write_response.g.dart';

@JsonSerializable()
class WriteResponse {
  final int result;
  final int insertedId;

  WriteResponse(this.result, this.insertedId);

  factory WriteResponse.fromJson(Map<String, dynamic> json) =>
      _$WriteResponseFromJson(json);

  Map<String, dynamic> toJson() => _$WriteResponseToJson(this);
}
