import styled from "styled-components";

export const HeadingM = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.weight.bold};
  letter-spacing: ${({ theme }) => theme.spacing.large};
`;
