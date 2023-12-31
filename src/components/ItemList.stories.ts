import type { Meta, StoryObj } from "@storybook/react";

import { ItemList } from "./ItemList";

const meta = {
  title: "ItemList",
  component: ItemList,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ItemList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    showErrors: false,
    items: [
      {
        name: "Brand Guidelines",
        quantity: 1,
        price: 1800.9,
        total: 1800.9,
      },
      {
        name: "Brand Guidelines 2",
        quantity: 1,
        price: 1800.9,
        total: 1800.9,
      },
    ],
  },
};

export const ShowErrors: Story = {
  args: {
    showErrors: true,
    items: [
      {
        name: "Brand Guidelines",
        quantity: 0,
        price: 1800.9,
        total: 1800.9,
      },
      {
        name: "",
        quantity: 0,
        price: 0.0,
        total: 0.0,
      },
    ],
  },
};
