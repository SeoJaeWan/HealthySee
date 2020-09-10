import styled from "styled-components"

export const Fullscreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.visible ? "flex" : "none")}; ;
`

export const ModalBlock = styled.div`
  width: 500px;
  background: white;
  padding: 1.5rem;

  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  .flex {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-around;
  }
  .times {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .context {
    width: 100%;
  }

  h2 {
    margin-top: 0.5;
    margin-bottom: 0.5rem;
  }
  h3 {
    margin: 1rem;
  }

  p {
    margin-bottom: 3rem;
  }

  .recentTime {
    margin: 2rem 1rem;
    font-size: 3rem;
    width: 5rem;
    border-radius: 20px;
    border: 3px #676a72 solid;
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    font-size: 2rem;
  }
`

export const StyledButton = styled.button`
  height: 2rem;
  & + & {
    margin-left: 0.75rem;
  }
`
