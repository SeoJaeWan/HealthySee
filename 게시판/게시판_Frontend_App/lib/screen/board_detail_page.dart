import 'package:board_study/keywords/color.dart';
import 'package:board_study/keywords/font.dart';
import 'package:board_study/model/board.dart';
import 'package:board_study/model/comment.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:provider/provider.dart';

// to-do: TextField Pocus문제
// to-do: TextField 줄 바꿈 헀을 때 위로 늘어나기

class BoardDetailPage extends StatefulWidget {
  PostDetail postDetail;
  BoardDetailPage(
    this.postDetail,
  );

  @override
  _BoardDetailPageState createState() => _BoardDetailPageState();
}

class _BoardDetailPageState extends State<BoardDetailPage> {
  bool isReported = false;
  bool isHealthSee = false;
  PostDetail postDetail;
  TextEditingController comment = TextEditingController();
  @override
  void initState() {
    // TODO: implement initState

    super.initState();
    postDetail = this.widget.postDetail;
    if (postDetail.BO_COMMENT_COUNT > 0) postDetail.init();
  }

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (context) => postDetail),
      ],
      child: Scaffold(
        backgroundColor: BACKGROUND_COLOR,
        appBar: AppBar(
          backgroundColor: CONTENT_COLOR,
          title: Text(postDetail.BO_TITLE),
          centerTitle: true,
        ),
        body: SafeArea(
          child: SingleChildScrollView(
            child: Padding(
              padding: EdgeInsets.all(8),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(4),
                child: Container(
                  color: CONTENT_COLOR,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      SizedBox(
                        height: 10,
                      ),
                      buildBoardTitle(),
                      buildSpace(),
                      buildBody(),
                      buildSpace(),
                      buildButton(),
                      Divider(
                        height: 1.0,
                        color: Colors.white60,
                      ),
                      buildCommentBar(),
                      Divider(
                        height: 1.0,
                        color: Colors.white60,
                      ),
                      buildMakeComment(),
                      Divider(
                        height: 1.0,
                        color: Colors.white60,
                      ),
                      Consumer<PostDetail>(
                          builder: (context, postDetail, child) {
                        if (!postDetail.loading)
                          return Column(
                            children: <Widget>[
                              ...buildComments(),
                            ],
                          );
                        else
                          return Container();
                      })
                    ],
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }

  Column buildMakeComment() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.end,
      children: <Widget>[
        TextField(
          maxLines: 3,
          style: LITTLE_TEXT_STYLE,
          controller: comment,
          keyboardType: TextInputType.multiline,
          decoration: InputDecoration(
            hintText: "댓글을 입력하세요",
            hintStyle: TextStyle(color: Colors.white),
            fillColor: CONTENT_COLOR,
            filled: true,
            border: OutlineInputBorder(
              borderSide: BorderSide(
                color: CONTENT_COLOR,
              ),
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 8.0),
          child: FlatButton(
            onPressed: (comment.text != null)
                ? () {
                    Comment.uploadComment(comment.text, postDetail.BO_CODE);
                    postDetail.loadComments();
                  }
                : null,
            child: Text(
              "댓글 전송",
              style: LITTLE_TEXT_STYLE,
            ),
            color: Colors.blue,
          ),
        )
      ],
    );
  }

  List<Widget> buildComments() {
    List<Widget> commentTiles = [];
    for (int i = 0; i < postDetail.comments.length; i++) {
      commentTiles.add(GestureDetector(
        onTap:
            (postDetail.comments[i].BC_RE_REF == postDetail.comments[i].BC_Code)
                ? () {
                    print("댓글누름");
                  }
                : null,
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(4.0),
            child: Container(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  (postDetail.comments[i].BC_RE_REF ==
                          postDetail.comments[i].BC_Code)
                      ? Text('작성자')
                      : Row(
                          children: <Widget>[
                            Icon(Icons.subdirectory_arrow_right),
                            Text('작성자'),
                          ],
                        ),
                  Text(
                    postDetail.comments[i].BC_Content,
                    style: TextStyle(
                        fontSize: 20,
                        color: Colors.white,
                        fontWeight: FontWeight.bold),
                  ),
                  Text(postDetail.comments[i].BC_Creation_Date),
                  Divider(
                    height: 1,
                    color: Colors.white,
                  )
                ],
              ),
              color: CONTENT_COLOR,
            ),
          ),
        ),
      ));
    }
    return commentTiles;
  }

  Column buildCommentBar() {
    return Column(
      children: <Widget>[
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Text(
                "댓글 ${postDetail.BO_COMMENT_COUNT}",
                style: TextStyle(color: Colors.white),
              ),
              Container(
                height: 30,
                child: IconButton(
                    color: Colors.white,
                    iconSize: 20,
                    icon: Icon(Icons.refresh),
                    onPressed: () {}),
              )
            ],
          ),
        ),
      ],
    );
  }

  Column buildButton() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            IconButton(
                color: Colors.white,
                iconSize: 80,
                icon: (isHealthSee)
                    ? Icon(Icons.sentiment_very_satisfied)
                    : Icon(Icons.sentiment_satisfied),
                onPressed: () {
                  setState(() {
                    isHealthSee = !isHealthSee;
                  });
                }),
            IconButton(
                color: Colors.white,
                iconSize: 80,
                icon: (isReported)
                    ? Icon(Icons.sentiment_very_dissatisfied)
                    : Icon(Icons.sentiment_dissatisfied),
                onPressed: () {
                  setState(() {
                    isReported = !isReported;
                  });
                })
          ],
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            Text(
              "추천 ${postDetail.BO_HEALTHSEE_COUNT}",
              style: TextStyle(fontSize: 20, color: Colors.white),
            ),
            Text(
              "신고 ${postDetail.BO_REPORT_COUNT}",
              style: TextStyle(fontSize: 20, color: Colors.white),
            ),
          ],
        )
      ],
    );
  }

  Column buildSpace() {
    return Column(
      children: <Widget>[
        SizedBox(
          height: 10,
        ),
        Divider(
          height: 1.0,
          color: Colors.white60,
        ),
        SizedBox(
          height: 10,
        ),
      ],
    );
  }

  Widget buildBody() {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Center(
            child: SizedBox(
              height: 300,
              width: 350,
              child: Container(
                color: Colors.white,
                child: Center(child: Text("이미지 구역")),
              ),
            ),
          ),
          SizedBox(
            height: 10,
          ),
          Text(postDetail.BO_CONTENT, style: TextStyle(color: Colors.white70)),
        ],
      ),
    );
  }

  Widget buildBoardTitle() {
    return Padding(
      padding: EdgeInsets.all(5),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          RichText(
              text: TextSpan(
            children: <TextSpan>[
              TextSpan(
                text: postDetail.BO_TITLE,
                style: TextStyle(
                    fontSize: 20,
                    color: Colors.white,
                    fontWeight: FontWeight.bold),
              ),
            ],
          )),
          Row(
            children: <Widget>[
              Expanded(
                  child: Text(
                "작성자",
                style: TextStyle(color: Colors.white70),
              )),
              Text(postDetail.BO_CREATION_DATE,
                  style: TextStyle(color: Colors.white70)),
            ],
          ),
          Row(
            children: <Widget>[
              Text("조회 ${postDetail.BO_HIT} ",
                  style: TextStyle(color: Colors.white70)),
              Text("댓글 ${postDetail.BO_COMMENT_COUNT}",
                  style: TextStyle(color: Colors.white70)),
            ],
          )
        ],
      ),
    );
  }
}
