import styled from "styled-components";
import { media } from "../../ReactiveStyle/ReactiveStyle";

export const Container = styled.div`
  width: 20vh;
  float: right;
  position:fixed;
  height: 100%;
  border-left: 10px solid #676a72;
  ${media.mobile`
display:none;
`}
  ${media.desktop`
display:none;
`}
`;

export const Element = styled.div`
  width: 50%;
  font-size: 15pt;
`;

export const Sticky = styled.div`
  float: right;
  position: sticky;
  z-index: 9900;
  width: 20vh;
  height: 90vh;
  ${media.mobile`
display:none;
`}
  ${media.desktop`
display:none;
`}
`;

