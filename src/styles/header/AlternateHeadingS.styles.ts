import styled from "styled-components";

export const HeadingSAlt = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.weight.bold};
  line-height: ${({ theme }) => theme.lineHeight.large};
  letter-spacing: ${({ theme }) => theme.spacing.medium};
`;
