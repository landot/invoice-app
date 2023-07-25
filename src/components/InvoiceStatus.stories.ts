import type { Meta, StoryObj } from "@storybook/react";

import { InvoiceStatus } from "./InvoiceStatus";

const meta = {
  title: "InvoiceStatus",
  component: InvoiceStatus,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof InvoiceStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Paid: Story = {
  args: {
    type: "paid",
  },
};

export const Pending: Story = {
  args: {
    type: "pending",
  },
};

export const Draft: Story = {
  args: {
    type: "draft",
  },
};
