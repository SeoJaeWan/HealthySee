import 'dart:convert';

import 'package:json_annotation/json_annotation.dart';
import 'package:http/http.dart' as http;
part 'comment.g.dart';

@JsonSerializable()
class Comment {
  final int BC_Code;
  final String BC_Content;
  final String BC_Creation_Date;
  final int BC_RE_REF;
  final int Board_BO_Code;

  Comment(this.BC_Code, this.BC_Content, this.BC_Creation_Date, this.BC_RE_REF,
      this.Board_BO_Code);

  factory Comment.fromJson(Map<String, dynamic> json) =>
      _$CommentFromJson(json);

  Map<String, dynamic> toJson() => _$CommentToJson(this);

  static uploadComment(String BC_Content, int Board_BO_CODE,
      {int BC_RE_REF}) async {
    var url = 'http://192.168.35.110:3000/comment';
    var response = await http.post(url, body: {
      'BC_Content': BC_Content,
      'Board_BO_CODE': Board_BO_CODE.toString(),
      'BC_RE_REF': (BC_RE_REF != null) ? BC_RE_REF.toString() : 0.toString()
    });
    print(response.body);
  }
}
