import { DestructiveButtonStyle } from "../data/types/DestructiveButtonStyle"
import { SecondaryButtonStyle } from "../data/types/SecondaryButtonStyle"
import { DeleteModalStyles, DeleteModalActionsStyles } from "../styles/DeleteModal.styles"
import { HeadingM } from "../styles/header/HeadingM.styles"
import { TextVariant } from "../styles/text/TextVariant.styles"
import { StyledButton } from "./Button"

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
                    type={{
                        includeAddIcon: false,
                        width: 'fit-content',
                        ...SecondaryButtonStyle
                    }}
                    onClick={() => props.handleDelete(props.id)} 
                />
                <StyledButton 
                    text='Delete'
                    type={{
                        includeAddIcon: false,
                        width: 'fit-content',
                        ...DestructiveButtonStyle
                    }}
                    onClick={() => props.handleCancel()}
                />
            </DeleteModalActionsStyles>
        </DeleteModalStyles>
    )
}