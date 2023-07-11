import styled from "styled-components"
import { Box } from "./Box.styles"
import { TextVariant } from "./text/TextVariant.styles"

export const DeleteModalActionsStyles = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`

export const DeleteModalStyles = styled(Box)`
    width: 480px;
    padding: 48px;

    ${TextVariant} {
        margin-top: 12px;
        color: ${({ theme }) => theme.colors.gray};
    }

    ${DeleteModalActionsStyles} {
        margin-top: 14px;
    }
`
