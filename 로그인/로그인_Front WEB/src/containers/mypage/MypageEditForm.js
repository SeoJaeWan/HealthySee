import React, { useEffect } from "react";
import MyPageEditCom from "../../component_contet/component/MyPage/MyPageEditCom";
import { useDispatch, useSelector } from "react-redux";
import { changeField } from "../../modules/mypage/mypage";

const MypageEditForm = () => {
  const dispatch = useDispatch();
  const { mypage, owner } = useSelector(({ mypage }) => ({
    mypage: mypage.mypage,
    owner: mypage.owner,
  }));

  useEffect(() => {
    let mypage = localStorage.getItem("form");
    console.log(JSON.parse(mypage));

    dispatch(changeField({ key: "mypage", data: JSON.parse(mypage) }));
  }, [dispatch, changeField]);

  return <MyPageEditCom mypage={mypage} />;
};

export default MypageEditForm;

// 인풋 제대로 되고 편집전까지 작업 완료
// 단 편집 상태에서 사용자 이름을 눌러 마이페이지를 다시 갔을 때 에러가 나온다.
// 편집도 마찬가지
