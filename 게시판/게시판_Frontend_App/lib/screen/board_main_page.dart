import 'package:board_study/keywords/color.dart';
import 'package:board_study/widget/menu_bar.dart';
import 'package:board_study/widget/board_title.dart';
import 'package:flutter/material.dart';

class BoardMainPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: BACKGROUND_COLOR,
      appBar: AppBar(
        backgroundColor: CONTENT_COLOR,
        centerTitle: true,
        title: Text('게시판'),
      ),
      body: Column(
        children: <Widget>[
          Container(
            height: 10,
          ),
          MenuBar("운동게시판", true),
          ...[
            BoardTitle(),
            Container(height: 15),
            BoardTitle(),
            Container(height: 15),
            BoardTitle()
          ],
          Container(
            height: 10,
          ),
          MenuBar("자유게시판", true),
          ...[
            BoardTitle(),
            Container(height: 15),
            BoardTitle(),
            Container(height: 15),
            BoardTitle()
          ]
        ],
      ),
    );
  }
}
