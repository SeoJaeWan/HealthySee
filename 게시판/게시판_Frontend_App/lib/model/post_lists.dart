import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:board_study/model/post_list.dart';
import 'package:flutter/cupertino.dart';

class PostLists extends ChangeNotifier {
  // 운동 or 자유게시판 중 어떤 게시판인지
  String id;
  int endAt;
  bool loading = false;
  bool noMorePosts = false;
  List<PostL> postLists;
  final scrollController = ScrollController(
    keepScrollOffset: true,
  );

  init() {
    loadPostLists();
    scrollController.addListener(_scrollListener);
  }

  loadPostLists() async {
    this.postLists = [];
    var url = 'http://192.168.35.110:3000/list';
    var response = await http.get(url);
    var postListsData = jsonDecode(response.body);

    for (var board in postListsData['data']) {
      PostL postL = PostL(
          board['BO_CODE'],
          board['BO_TITLE'],
          board['BO_CREATION_DATE'],
          board['BO_HIT'],
          board['BO_REPORT_COUNT'],
          board['BO_HEALTHSEE_COUNT'],
          board['BO_COMMENT_COUNT']);
      this.postLists.add(postL);
    }
    endAt = this.postLists[postLists.length - 1].BO_CODE;
    notifyListeners();
    loading = false;
  }

  Future<Null> refreshPostLists() async {
    this.postLists = [];
    loading = true;
    await loadPostLists();
  }

  getNextPostLists() async {
    var url = 'http://192.168.35.110:3000/list/$endAt';
    var response = await http.get(url);
    var postListsData = jsonDecode(response.body);

    for (var board in postListsData['data']) {
      PostL postL = PostL(
          board['BO_CODE'],
          board['BO_TITLE'],
          board['BO_CREATION_DATE'],
          board['BO_HIT'],
          board['BO_REPORT_COUNT'],
          board['BO_HEALTHSEE_COUNT'],
          board['BO_COMMENT_COUNT']);
      this.postLists.add(postL);
    }
    endAt = this.postLists[postLists.length - 1].BO_CODE;
    notifyListeners();
    loading = false;
  }

  void _scrollListener() {
    if (endAt == 1) return;
    if (loading) return;

    double isBottom = scrollController.position.maxScrollExtent * 0.95.toInt();

    if (scrollController.offset > isBottom) {
      print("발동");
      this.loading = true;
      getNextPostLists();
    }
  }
}
