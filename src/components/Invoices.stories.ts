import type { Meta, StoryObj } from '@storybook/react';

import { Invoices } from './Invoices';
import { Status } from './Filter';

const meta = {
  title: 'Invoices',
  component: Invoices,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Invoices>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    invoices: [
        {
            id: 'RT12345',
            date: '19 Aug 2021',
            contact: 'Jensen Huang',
            cost: 180.90,
            status: Status.Paid
        },
        {
            id: 'RT123456',
            date: '19 Aug 2021',
            contact: 'Jensen Huangggggg',
            cost: 1800.90,
            status: Status.Pending
        },
        {
            id: 'RT12345678',
            date: '19 Aug 2021',
            contact: 'Jensen H',
            cost: 18000.90,
            status: Status.Draft
        },
    ]
  }
}