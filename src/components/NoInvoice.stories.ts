import type { Meta, StoryObj } from '@storybook/react';

import { NoInvoice } from './NoInvoice';

const meta = {
  title: 'NoInvoice',
  component: NoInvoice,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof NoInvoice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {}      
}