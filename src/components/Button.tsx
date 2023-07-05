import { ReactComponent as AddIcon } from '../assets/icon-plus.svg';
import { ButtonContainerStyles, AddIconStyles, ButtonStyles } from '../styles/Button.styles';

export interface ButtonColor {
    textColor: string;
    backgroundColor: string;
    hoverTextColor: string;
    hoverBackgroundColor: string;
}

export interface ButtonType extends ButtonColor {
    includeAddIcon: boolean;
    width: 'fit-content' | '100%';
}

export function StyledButton(props: { 
    text: string, 
    type: ButtonType,
    onClick: () => void 
}) {
    return (
        <ButtonContainerStyles $styles={props.type} data-testid={'styled-button'}>
            {props.type.includeAddIcon && (
                <AddIconStyles>
                    <AddIcon />
                </AddIconStyles>
            )}
            <ButtonStyles $styles={props.type}>{props.text}</ButtonStyles>
        </ButtonContainerStyles>
    )
}