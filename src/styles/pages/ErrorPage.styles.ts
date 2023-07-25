import styled from "styled-components";
import { ButtonContainerStyles } from "../components/Button.styles";

export const ErrorPageStyles = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${ButtonContainerStyles} {
    margin-top: 20px;
  }
`;
