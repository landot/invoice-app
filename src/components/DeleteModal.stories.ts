import type { Meta, StoryObj } from "@storybook/react";

import { DeleteModal } from "./DeleteModal";

const meta = {
  title: "DeleteModal",
  component: DeleteModal,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof DeleteModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: "asdfasdf",
  },
};
