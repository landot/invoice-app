import styled from "styled-components"
import { HeadingM } from "../styles/header/HeadingM.styles"
import { TextVariant } from "../styles/text/TextVariant.styles"
import { StyledButton } from "./Button"

export const DeleteModalActionsStyles = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`

export const DeleteModalStyles = styled.div`
    width: 480px;
    border-radius: 8px;
    padding: 48px;
    background: #FFF;
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.10);

    ${TextVariant} {
        margin-top: 12px;
        color: #888EB0;
    }

    ${DeleteModalActionsStyles} {
        margin-top: 14px;
    }
`

export function DeleteModal(props: {
    id: string,
    handleDelete: (id: string) => void,
    handleCancel: () => void
}) {
    return (
        <DeleteModalStyles>
            <HeadingM>Confirm Deletion</HeadingM>
            <TextVariant>Are you sure you want to delete invoice #{props.id}? This action cannot be undone.</TextVariant>
            <DeleteModalActionsStyles>
                <StyledButton
                    text='Cancel'
                    // add correct colors later
                    type={{
                        includeAddIcon: false,
                        textColor: 'orange',
                        backgroundColor: 'red',
                        hoverTextColor: 'green',
                        hoverBackgroundColor: 'blue',
                        width: 'fit-content'
                    }}
                    onClick={() => props.handleDelete(props.id)} 
                />
                <StyledButton 
                    text='Delete'
                    // add correct colors later
                    type={{
                        includeAddIcon: false,
                        textColor: 'orange',
                        backgroundColor: 'red',
                        hoverTextColor: 'green',
                        hoverBackgroundColor: 'blue',
                        width: 'fit-content'
                    }}
                    onClick={() => props.handleCancel()}
                />
            </DeleteModalActionsStyles>
        </DeleteModalStyles>
    )
}