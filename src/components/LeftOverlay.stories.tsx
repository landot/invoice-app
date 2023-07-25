import type { Meta, StoryObj } from "@storybook/react";

import { LeftOverlay } from "./LeftOverlay";

const meta = {
  title: "LeftOverlay",
  component: LeftOverlay,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {},
} satisfies Meta<typeof LeftOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>this is a left positioned component in the overlay</p>
      </div>
    ),
  },
};
