import styled, { createGlobalStyle } from "styled-components";
import { TextVariant } from "./text/TextVariant.styles";

export const DatePickerStyles = styled.div`
    display: flex;
    flex-direction: column;

    ${TextVariant} {
        color: ${({ theme }) => theme.colors.grayBlue};
        margin-bottom: 9px;
    }
`

export const DatePickerWrapperStyles = createGlobalStyle`
    .date-picker {
        width: 240px;
        height: 48px;
    }

    .react-datepicker {
        font-family: 'League Spartan', Sans-Serif;
        border: none;
        border-radius: 8px;
        background: #FFF;
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
        color: #0C0E16;
        font-size: 15px;
        font-weight: 700;
        line-height: 15px;
        letter-spacing: -0.25px;

        &:hover {
            background-color: inherit;
        }
    }

    .react-datepicker__day--outside-month {
        color: #0C0E16;
        font-size: 15px;
        font-weight: 700;
        line-height: 15px;
        letter-spacing: -0.25px;
        opacity: 0.0814194455742836;
    }

    .react-datepicker__day--selected {
        color: #7C5DFA;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: 15px;
        letter-spacing: -0.25px;
        background-color: inherit;
    }

    .react-datepicker__week {
        margin-bottom: 10px;
    }

    .date-picker input {
        outline: none;
        border-radius: 4px;
        border: 1px solid var(--05, #DFE3FA);
        background: #FFF;

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