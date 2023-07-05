import type { Meta, StoryObj } from '@storybook/react';

import { Filter } from './Filter';
import { Status } from '../data/types/Data';

const meta = {
  title: 'Filter',
  component: Filter,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        selectedFilters: [Status.Draft],
        filters: [Status.Draft, Status.Pending, Status.Paid]
    }      
}