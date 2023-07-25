import type { Meta, StoryObj } from "@storybook/react";

import { CenterOverlay } from "./CenterOverlay";

const meta = {
  title: "CenterOverlay",
  component: CenterOverlay,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {},
} satisfies Meta<typeof CenterOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <div
        style={{
          backgroundColor: "white",
          width: "500px",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>this is a centered component in the overlay</p>
      </div>
    ),
  },
};
