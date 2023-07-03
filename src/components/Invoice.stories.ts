import type { Meta, StoryObj } from '@storybook/react';

import { Invoice } from './Invoice';
import { Status } from './Filter';

const meta = {
  title: 'Invoice',
  component: Invoice,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Invoice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    invoice: {
      id: 'RT12345',
      date: '19 Aug 2021',
      contact: 'Jensen Huang',
      cost: 1800.90,
      status: Status.Paid
    }
  }
}