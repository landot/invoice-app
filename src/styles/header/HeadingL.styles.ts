import styled from "styled-components";

export const HeadingL = styled.h1`
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
    font-weight: ${({ theme }) => theme.weight.bold};
    line-height: ${({ theme }) => theme.lineHeight.extraLarge};
    letter-spacing: ${({ theme }) => theme.spacing.extraLarge};
`