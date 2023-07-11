import styled from "styled-components"
import { TextVariant } from "../text/TextVariant.styles"
import { Box } from "./Box.styles"

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
