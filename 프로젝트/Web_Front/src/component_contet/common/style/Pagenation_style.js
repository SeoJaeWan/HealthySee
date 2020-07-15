import styled from "styled-components"
import { media } from "../../../ReactiveStyle/ReactiveStyle"

export const Pagenationform = styled.div`
  display: flex;
  width: 104%;
  height: 3rem;
  button {
    min-width: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 5%;
    height: 100%;
    color: white;
    font-size: 2rem;
  }
  .Ltbutton {
    color: #676a72;
    float: left;
  }
  .Rtbutton {
    color: #676a72;
    float: right;
  }
  .pageform {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`
