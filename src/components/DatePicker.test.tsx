import { render } from "@testing-library/react";
import { vi } from "vitest";
import Theme from "../styles/themeProvider";
import { StyledDatePicker } from "./DatePicker";

describe("DatePicker", () => {
  it("renders with selected value and title", () => {
    const mockChange = vi.fn();
    const { container, getByText } = render(
      <Theme>
        <StyledDatePicker
          title={"date picker title"}
          selectedDate={new Date("Jun 30 2023").getTime()}
          handleChange={mockChange}
        />
      </Theme>,
    );
    const title = getByText("date picker title");
    expect(title).toBeInTheDocument();
    expect(container.querySelector("input")?.getAttribute("value")).toEqual(
      "06/30/2023",
    );
  });

  // todo fix later. test isn't working
  // it('date can be updated', () => {
  //   const mockChange = vi.fn();
  //   const { container, getByText } = render(
  //     <Theme>
  //       <StyledDatePicker
  //           title={'date picker title'}
  //           selectedDate={new Date('Jun 30 2023')}
  //           handleChange={mockChange}
  //       />
  //     </Theme>
  //   );
  //   expect(container.querySelector('input')?.getAttribute('value')).toEqual('06/30/2023');
  //   fireEvent.click(container.querySelector('.date-picker'));
  // fireEvent.click(getByText('29'));
  // });
});
