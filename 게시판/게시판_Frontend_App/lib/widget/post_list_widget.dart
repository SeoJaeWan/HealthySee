import 'dart:convert';
import 'package:board_study/keywords/color.dart';
import 'package:board_study/model/board.dart';
import 'package:board_study/model/post_list.dart';
import 'package:board_study/screen/board_detail_page.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class PostListWidget extends StatelessWidget {
  PostListWidget({Key key, @required this.posts, @required this.controller})
      : super(key: key);

  final List<PostL> posts;
  final controller;

  @override
  Widget build(BuildContext context) {
    /// 글을 목록한다.
    return ListView.separated(
      itemCount: posts.length,
      controller: controller,
      separatorBuilder: (context, i) {
        if (i % 10 == 9)
          return Row(
            children: <Widget>[
              Text("${(i / 10 + 0.1).toInt()}Page "),
              Expanded(
                  child: Divider(
                height: 0.5,
              ))
            ],
          );
        else
          return Divider(
            height: 0.1,
          );
      },
      itemBuilder: (context, i) {
        return postListItem(
          context,
          posts[i],
          // key: ValueKey('PostListItem' + randomString()),
        );
      },
    );
  }

  Widget postListItem(context, PostL post) {
    return Padding(
      padding: const EdgeInsets.all(6.0),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(8.0),
        child: Container(
          color: CONTENT_COLOR,
          child: ListTile(
            onTap: () async {
              PostDetail postDetail =
                  await PostDetail.getBoardDetail(post.BO_CODE);
              Navigator.of(context).push(MaterialPageRoute(
                  builder: (context) => BoardDetailPage(postDetail)));
            },
            key: Key(post.BO_CODE.toString()),
            title: Text(post.BO_TITLE),
            subtitle: Row(children: <Widget>[
              Expanded(child: Text("작성자")),
              Text(post.BO_CREATION_DATE)
            ]),
            trailing: Text(
              '''
            조회 수 :${post.BO_HIT}
            댓글 수 :${post.BO_COMMENT_COUNT}
            추천 수 :${post.BO_HEALTHSEE_COUNT}
            ''',
              style: TextStyle(fontSize: 13),
            ),
          ),
        ),
      ),
    );
  }
}
