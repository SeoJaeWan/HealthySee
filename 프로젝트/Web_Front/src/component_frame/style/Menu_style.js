import styled from "styled-components"
import { media } from "../../lib/ReactiveStyle/ReactiveStyle"

export const MenuInfo = styled.menu`
  font-size: 2rem;
  list-style-type: none;
  background-color: rgba(255, 255, 255, 0);

  z-index: 10;
  .linkbutton {
    color: #676a72;
    background-color: rgba(255, 255, 255, 0);
  }

  button {
    background-color: rgba(255, 255, 255, 0);
    font-size: 2.5rem;
    margin: 1rem 0;
  }
  .mobileLogin {
    display: none;
    ${media.mobile`
  display:block;
`}
  }
`