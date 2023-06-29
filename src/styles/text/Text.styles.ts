import styled from "styled-components";

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.weight.normal};
    line-height: ${({ theme }) => theme.lineHeight.small};
    letter-spacing: ${({ theme }) => theme.spacing.small};
`
