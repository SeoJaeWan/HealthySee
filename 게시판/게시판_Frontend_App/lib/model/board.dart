import 'dart:convert';
import 'package:board_study/model/comment.dart';
import 'package:http/http.dart' as http;
import 'package:board_study/model/post_list.dart';
import 'package:board_study/screen/board_detail_page.dart';
import 'package:flutter/material.dart';
import 'package:json_annotation/json_annotation.dart';

part 'board.g.dart';

@JsonSerializable()
class PostDetail extends ChangeNotifier {
  final int BO_CODE;
  final String BO_TITLE; // 글제목
  //final String userNickName; // 작성자
  //final String attachment; // 첨부파일
  final String BO_CONTENT; //
  // 글 내용
  final String BO_CREATION_DATE;
  final int BO_HIT;
  final int BO_REPORT_COUNT;
  final int BO_HEALTHSEE_COUNT;
  final int BO_COMMENT_COUNT;
  bool loading = false;
  List<Comment> comments = <Comment>[];
  //final int healthSeeCount;
  //final int commentCount;
  //static int boardCount = 1;

  PostDetail(this.BO_TITLE, this.BO_CONTENT, this.BO_REPORT_COUNT,
      this.BO_HEALTHSEE_COUNT, this.BO_COMMENT_COUNT,
      {this.BO_HIT, this.BO_CREATION_DATE, this.BO_CODE});

  factory PostDetail.fromJson(Map<String, dynamic> json) =>
      _$PostDetailFromJson(json);

  Map<String, dynamic> toJson() => _$PostDetailToJson(this);

  static Future getBoardDetail(int bodeCode) async {
    var url = 'http://192.168.35.110:3000/post/$bodeCode';
    var response = await http.get(url);
    Map postMap = jsonDecode(response.body);
    var postD = PostDetail.fromJson(postMap);

    return postD;
  }

  init() {
    loadComments();
  }

  loadComments() async {
    loading = true;
    List<Comment> commentSet = [];
    var url = 'http://192.168.35.110:3000/comment/${BO_CODE}';
    var response = await http.get(url);
    var commentsData = jsonDecode(response.body);
    for (var co in commentsData['data']) {
      Comment comment = Comment(co['BC_Code'], co['BC_Content'],
          co['BC_Creation_Date'], co['BC_RE_REF'], co['Board_BO_Code']);
      commentSet.add(comment);
    }
    comments = commentSet;
    loading = false;
    notifyListeners();
  }

  commentsUpdate() {}
}
