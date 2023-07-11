import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from './TextField';

const meta = {
  title: 'TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    inputType: 'text',
    value: '',
    title: 'Street Address'
  },
};

export const WholeNumber: Story = {
  args: {
    inputType: 'int',
    value: '10',
    title: 'Quantity'
  },
};

export const Number: Story = {
  args: {
    inputType: 'number',
    value: '10',
    title: 'Price ($)'
  },
};
