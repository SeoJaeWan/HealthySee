import React from "react"
// import { Link } from "react-router-dom"
import { AlbumItemForm } from "./style/AlbumItemCom_style"
import { Icon } from "semantic-ui-react"

const AlbumItemCom = () => {
  return (
    <>
      <AlbumItemForm>
        <thead>
          <tr>
            {/* 프사 나올곳 */}
            <th>프사</th>
            {/* 글 작성자 */}
            <th>
              이름
              <br />
              작성일자
              {/* 편집버튼  */}
              <button>
                <Icon name="ellipsis horizontal"></Icon>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* 본문 내용 */}
          <tr>
            <td colSpan="2">작성 내용 </td>
          </tr>
          {/* 이미지 미리보기 뷰 */}
          <tr>
            <td>이미지</td>
            <td>
              <div>이미지</div>
              <div>이미지</div>
              <div>이미지</div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          {/* 댓글 ( 추천수 가장 많은거 ) */}
          <tr>
            <td colSpan="2">댓글</td>
          </tr>
        </tfoot>
      </AlbumItemForm>
    </>
  )
}

export default AlbumItemCom
