import styled from "styled-components"
import { media } from "../../../../lib/ReactiveStyle/ReactiveStyle"

export const ButtonForm = styled.div`
  display: flex;
  justify-content: center;

  button {
    font-size: 2rem;
    ${media.half`

    font-size: 1rem;
  `}
  }
  hr {
    margin: 2px 5px 3px 5px;

    width: 5px;
    height: 2rem;

    background-color: #676a72;
    color: #676a72;
  }
`
