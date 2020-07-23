import React from "react"
import { AlbumEditItemForm } from "./style/AlbumEditItemCom_style"

const AlbumEditItemCom = () => {
  return (
    <AlbumEditItemForm>
      {/* 엘범 아이템 */}
      <div className="itemForm">
        {/* 삭제버튼 */}
        <button>X</button>
        이미지
      </div>
    </AlbumEditItemForm>
  )
}

export default AlbumEditItemCom
