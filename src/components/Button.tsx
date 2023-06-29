import styled from 'styled-components';
import { ReactComponent as AddIcon } from '../assets/icon-plus.svg';


export interface ButtonType {
    includeAddIcon: boolean;
    textColor: string;
    backgroundColor: string;
    hoverTextColor: string;
    hoverBackgroundColor: string;
    width: 'fit-content' | '100%';
}

export const AddIconStyles = styled.span`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;

`

export const ButtonStyles = styled.button<{$styles: ButtonType}>`
    cursor: inherit;
    border: none;
    background: inherit;
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-size: ${({ theme }) => theme.lineHeight.extraSmall};
    color: ${p => p.$styles.textColor};
`

export const ButtonContainerStyles = styled.div<{$styles: ButtonType}>`
    width: ${p => p.$styles.width}; 
    cursor: pointer;
    padding: ${p => p.$styles.includeAddIcon ? '8px 17px 8px 8px': '18px 24px 15px 24px'}; 
    border-radius: 24px;
    display: flex;
    justify-content: ${p => p.$styles.width === '100%' ? 'center': 'space-between'};
    align-items: center;
    background: ${p => p.$styles.backgroundColor}; 

    ${AddIconStyles} {
        margin-right: 16px;
    }

    &:hover {
        background: ${p => p.$styles.hoverBackgroundColor}; 

        ${ButtonStyles} {
            color: ${p => p.$styles.hoverTextColor};  
        }
    }
`

export function Button(props: { 
    text: string, 
    type: ButtonType,
    onClick: () => void 
}) {
    return (
        <ButtonContainerStyles $styles={props.type}>
            {props.type.includeAddIcon && (
                <AddIconStyles>
                    <AddIcon />
                </AddIconStyles>
            )}
            <ButtonStyles $styles={props.type}>{props.text}</ButtonStyles>
        </ButtonContainerStyles>
    )
}