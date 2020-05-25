import 'package:board_study/keywords/color.dart';
import 'package:board_study/model/post_lists.dart';
import 'package:board_study/screen/board_write_page.dart';
import 'package:board_study/widget/post_list_widget.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class BoardListPage extends StatefulWidget {
  @override
  _BoardListPageState createState() => _BoardListPageState();
}

class _BoardListPageState extends State<BoardListPage> {
  PostLists postLists = PostLists();
  final GlobalKey<RefreshIndicatorState> _refreshIndicatorKey =
      new GlobalKey<RefreshIndicatorState>();
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    if (postLists.postLists == null) postLists.init();

    WidgetsBinding.instance
        .addPostFrameCallback((_) => _refreshIndicatorKey.currentState.show());
  }

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (context) => postLists),
      ],
      child: SafeArea(
          child: Scaffold(
        backgroundColor: BACKGROUND_COLOR,
        appBar: AppBar(
          title: Text("게시판 글 목록"),
          centerTitle: true,
          actions: <Widget>[
            FlatButton(
                onPressed: () {
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) => BoardWritePage()));
                },
                child: Text(
                  "게시글 작성",
                ))
          ],
        ),
        body: postLists.postLists != null
            ? Consumer<PostLists>(builder: (context, model, child) {
                return RefreshIndicator(
                  key: _refreshIndicatorKey,
                  onRefresh: () async {
                    model.refreshPostLists();
                  },
                  child: PostListWidget(
                      posts: model.postLists,
                      controller: model.scrollController),
                );
              })
            : SizedBox.shrink(),
      )),
    );
  }
}
