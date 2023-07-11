import styled, { createGlobalStyle } from "styled-components";
import { TextVariant } from "./text/TextVariant.styles";

export const DatePickerStyles = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    ${TextVariant} {
        color: ${({ theme }) => theme.colors.grayBlue};
        margin-bottom: 9px;
    }
`

export const DatePickerWrapperStyles = createGlobalStyle`
    .date-picker {
        width: 100%;
        height: 48px;
    }

    .react-datepicker {
        font-family: 'League Spartan', Sans-Serif;
        border: none;
        border-radius: 8px;
        background: ${({ theme }) => theme.colors.white};
        box-shadow: 0px 10px 20px 0px rgba(72, 84, 159, 0.25);
    }


    .react-datepicker__input-container {
        width: 100%;
        height: 100%;
    }

    .react-datepicker__navigation {
        margin-top: 5px;
    }

    .react-datepicker__day-names {
        display: none;
    }

    .react-datepicker__triangle {
        display: none;
    }

    .react-datepicker__header {
        margin-top: 10px;
        border-bottom: none;
        background-color: ${({ theme }) => theme.colors.white};
    }

    .react-datepicker__current-month {
        margin-bottom: 10px;
        color: ${({ theme }) => theme.colors.black};
        font-size: ${({ theme }) => theme.fontSize.medium};
        font-weight: ${({ theme }) => theme.weight.bold};
        line-height: ${({ theme }) => theme.lineHeight.extraSmall};
        letter-spacing: ${({ theme }) => theme.spacing.medium};
    }

    .react-datepicker__day {
        color: ${({ theme }) => theme.colors.black};
        font-size: ${({ theme }) => theme.fontSize.medium};
        font-weight: ${({ theme }) => theme.weight.bold};
        line-height: ${({ theme }) => theme.lineHeight.extraSmall};
        letter-spacing: ${({ theme }) => theme.spacing.medium};

        &:hover {
            background-color: inherit;
        }
    }

    .react-datepicker__day--outside-month {
        color: ${({ theme }) => theme.colors.black};
        font-size: ${({ theme }) => theme.fontSize.medium};
        font-weight: ${({ theme }) => theme.weight.bold};
        line-height: ${({ theme }) => theme.lineHeight.extraSmall};
        letter-spacing: ${({ theme }) => theme.spacing.medium};
        opacity: 0.08;
    }

    .react-datepicker__day--selected {
        color: ${({ theme }) => theme.colors.brightPurple};
        font-size: ${({ theme }) => theme.fontSize.medium};
        font-weight: ${({ theme }) => theme.weight.bold};
        line-height: ${({ theme }) => theme.lineHeight.extraSmall};
        letter-spacing: ${({ theme }) => theme.spacing.medium};
        background-color: inherit;
    }

    .react-datepicker__week {
        margin-bottom: 10px;
    }

    .date-picker input {
        outline: none;
        border-radius: 4px;
        border: ${({ theme }) => `1px solid ${theme.colors.lightGrayBlue}`};
        background: ${({ theme }) => theme.colors.white};

        padding: 0 20px;
        width: 100%;
        height: 100%;
        color: ${({ theme }) => theme.colors.black};
        font-size: ${({ theme }) => theme.fontSize.medium};
        font-weight: ${({ theme }) => theme.weight.bold};
        line-height: ${({ theme }) => theme.lineHeight.extraSmall};
        letter-spacing: ${({ theme }) => theme.spacing.medium};

        &:focus {
            border: ${({ theme }) => `1px solid ${theme.colors.lightPurple}`};
        }
    }
`;