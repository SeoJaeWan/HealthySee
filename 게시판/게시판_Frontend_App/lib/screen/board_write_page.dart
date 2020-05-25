import 'dart:convert';
import 'dart:io';
import 'package:board_study/keywords/color.dart';
import 'package:board_study/keywords/font.dart';
import 'package:board_study/model/board.dart';
import 'package:board_study/model/write_response.dart';
import 'package:board_study/screen/board_detail_page.dart';
import 'package:board_study/widget/menu_bar.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:http/http.dart' as http;

class BoardWritePage extends StatefulWidget {
  @override
  _BoardWritePageState createState() => _BoardWritePageState();
}

class _BoardWritePageState extends State<BoardWritePage> {
  File file;
  bool isFilePicked = false;
  TextEditingController title = TextEditingController();
  TextEditingController content = TextEditingController();

  @override
  void dispose() {
    // TODO: implement dispose
    title?.dispose();
    content?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: BACKGROUND_COLOR,
      appBar: AppBar(
        backgroundColor: CONTENT_COLOR,
        title: Text("게시글 작성"),
        centerTitle: true,
        actions: <Widget>[
          FlatButton(
              onPressed: () async {
                doWriteBoard();
              },
              child: Text(
                "작성",
                style: LITTLE_TEXT_STYLE,
              ))
        ],
      ),
      body: ListView(
        children: <Widget>[
          MenuBar("제목", false),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextFormField(
              controller: title,
              style: LITTLE_TEXT_STYLE,
              decoration: InputDecoration(
                  fillColor: CONTENT_COLOR,
                  filled: true,
                  border: OutlineInputBorder(
                      borderSide: BorderSide(
                    color: CONTENT_COLOR,
                  ))),
            ),
          ),
//          MenuBar("첨부파일", false),
//          FlatButton(
//              onPressed: () {
//                filePickerOn();
//                setState(() {
//                  isFilePicked = !isFilePicked;
//                });
//              },
//              child: Text('첨부')),
//          Text(isFilePicked ? "${file.toString()}" : "첨부파일 없음"),
          MenuBar("내용", false),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextFormField(
              controller: content,
              maxLines: 10,
              keyboardType: TextInputType.multiline,
              //textInputAction: TextInputAction.newline,
              style: LITTLE_TEXT_STYLE,
              decoration: InputDecoration(
                fillColor: CONTENT_COLOR,
                filled: true,
                border: OutlineInputBorder(
                  borderSide: BorderSide(
                    color: CONTENT_COLOR,
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  void doWriteBoard() async {
    var BO_TITLE = title.text;
    var BO_CONTENT = content.text;

    var url = 'http://192.168.35.110:3000/post';
    var response = await http
        .post(url, body: {'BO_TITLE': BO_TITLE, 'BO_CONTENT': BO_CONTENT});

    Map writeResponseMap = jsonDecode(response.body);
    var writeResponse = WriteResponse.fromJson(writeResponseMap);

    var postDetail = await PostDetail.getBoardDetail(writeResponse.insertedId);

    Navigator.of(context).pushReplacement(
        MaterialPageRoute(builder: (context) => BoardDetailPage(postDetail)));
  }
//  filePickerOn() async {
//    file = await FilePicker.getFile();
//  }
}
