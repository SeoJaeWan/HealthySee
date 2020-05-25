import 'package:board_study/keywords/color.dart';
import 'package:board_study/keywords/font.dart';
import 'package:board_study/screen/board_list_page.dart';
import 'package:flutter/material.dart';

class MenuBar extends StatelessWidget {
  final String title;
  final bool isFlatButton;

  MenuBar(this.title, this.isFlatButton);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(8.0),
        child: Container(
          padding: EdgeInsets.symmetric(horizontal: 8.0),
          color: CONTENT_COLOR,
          child: Row(
            children: <Widget>[
              Expanded(
                child: Text(
                  title,
                  style: MENUBAR_TEXT_STYLE,
                ),
              ),
              (isFlatButton)
                  ? FlatButton(
                      onPressed: () {
                        Navigator.of(context).push(MaterialPageRoute(
                            builder: (context) => BoardListPage()));
                      },
                      child: Text(
                        "더보기",
                        style: MENUBAR_TEXT_STYLE,
                      ),
                    )
                  : Container(),
            ],
          ),
        ),
      ),
    );
  }
}
