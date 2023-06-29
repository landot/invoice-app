import styled from "styled-components";

export const TextVariant = styled.p`
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: ${({ theme }) => theme.weight.normal};
    line-height: ${({ theme }) => theme.lineHeight.extraSmall};
    letter-spacing: ${({ theme }) => theme.spacing.small};
`
