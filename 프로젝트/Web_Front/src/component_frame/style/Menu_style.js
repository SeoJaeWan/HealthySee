import styled from "styled-components";
import { media } from "../../ReactiveStyle/ReactiveStyle";

export const MenuInfo = styled.menu`
  font-size:2rem;
  list-style-type:none;
  background-color: rgba( 255, 255, 255, 0);

  z-index:10;
  .linkbutton{
    color:#676a72;
    background-color: rgba( 255, 255, 255, 0 );
  }

  button{
    background-color: rgba( 255, 255, 255, 0 );
    font-size:2.5rem;
    margin: 1rem 0 ;
  }
`;
export const BoardList = styled.div`
  position: relative;
  top: 0rem;
  width: 250px;
  overflow: hidden;
  transition: all 1s;
  height: ${(props) => (props.boardView ? "0px" : "150px")};
`
