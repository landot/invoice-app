import DatePicker from "react-datepicker";
import {
  DatePickerStyles,
  DatePickerWrapperStyles,
} from "../styles/components/DatePickerWrapper.styles";
import { TextVariant } from "../styles/text/TextVariant.styles";
import "react-datepicker/dist/react-datepicker.css";

export function StyledDatePicker(props: {
  title: string;
  selectedDate: number;
  handleChange: (timestamp: number) => void;
}) {
  return (
    <DatePickerStyles>
      <TextVariant>{props.title}</TextVariant>
      <DatePicker
        wrapperClassName="date-picker"
        selected={new Date(props.selectedDate)}
        onChange={(date: Date) => props.handleChange(date.getTime())}
      />
      <DatePickerWrapperStyles />
    </DatePickerStyles>
  );
}
