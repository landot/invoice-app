import type { Meta, StoryObj } from "@storybook/react";

import { StyledDatePicker } from "./DatePicker";

const meta = {
  title: "DatePicker",
  component: StyledDatePicker,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof StyledDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Issue Date",
    selectedDate: new Date().getTime(),
  },
};
