import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "./Dropdown";

const meta = {
  title: "Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Payment Terms",
    data: [
      { name: "1", value: 1 },
      { name: "2", value: 2 },
      { name: "3", value: 3 },
    ],
    selectedValue: 2,
  },
};
