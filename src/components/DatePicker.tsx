import { useState } from "react";
import DatePicker from "react-datepicker";
import { DatePickerStyles, DatePickerWrapperStyles } from "../styles/DatePickerWrapper.styles";
import { TextVariant } from "../styles/text/TextVariant.styles";
import "react-datepicker/dist/react-datepicker.css";

export function StyledDatePicker(props: {title: string, selectedDate: Date, handleChange: () => void}) {
    const [startDate, setStartDate] = useState(props.selectedDate || new Date());

    return (
        <DatePickerStyles>
            <TextVariant>{props.title}</TextVariant>
            <DatePicker wrapperClassName='date-picker' selected={startDate} onChange={(date: Date) => setStartDate(date)} />
            <DatePickerWrapperStyles />
        </DatePickerStyles>
    )
}