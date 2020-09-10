import React from "react"
import defaultImg from "../../../Images/defaultImg.jpg"
import Cropper from "react-avatar-editor"
import { Fullscreen, ModalBlock, StyledButton } from "../../common/Modal/style/Modal_style"

const ProfileImageModal = ({
  visible,
  title,
  onCancel,
  mypage,
  cropper,
  scale,
  getImagePreview,
  onChangeModal,
  setScale,
}) => {
  if (!visible) return null
  return (
    <>
      <Fullscreen>
        <ModalBlock>
          <h2>프로필 사진 수정</h2>
          <Cropper
            className="imgDiv"
            image={mypage.img ? mypage.img : defaultImg}
            ref={cropper}
            width={250}
            height={250}
            scale={scale}
            crossOrigin={"anonymous"}
          />
          <div style={{ pointerEvents: "all" }}>
            <input
              type="range"
              min="1"
              max="3"
              step="any"
              value={scale}
              onChange={(e) => setScale(parseFloat(e.target.value))}
            />
          </div>
          <div className="buttons">
            <StyledButton type="button" onClick={getImagePreview}>
              완료
            </StyledButton>
            <StyledButton type="button" onClick={onCancel}>
              취소
            </StyledButton>
          </div>
        </ModalBlock>
      </Fullscreen>
    </>
  )
}

export default ProfileImageModal
