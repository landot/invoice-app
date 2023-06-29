import styled from "styled-components";

export const HeadingS = styled.h3`
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: ${({ theme }) => theme.weight.bold};
    line-height: ${({ theme }) => theme.lineHeight.extraSmall};
    letter-spacing: ${({ theme }) => theme.spacing.medium};
`
