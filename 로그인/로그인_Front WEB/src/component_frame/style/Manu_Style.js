import styled from "styled-components";
import { media } from "../../ReactiveStyle/ReactiveStyle";

export const Container = styled.div`
  display: flex;
  float: left;
  border-right: 10px solid#676A72;
  display: ${(props) => props.view || "block"};

  .Element {
    height: 100vh;
    font-size: 3rem;
  }
`;
