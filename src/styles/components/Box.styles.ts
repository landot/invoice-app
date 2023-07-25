import styled, { css } from "styled-components";

export const BoxCss = css`
  width: 100%;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
`;

export const Box = styled.div`
  ${BoxCss}
`;
