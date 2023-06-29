import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonWithAddIconFitContent: Story = {
  args: {
    text: 'button text',
    type: {
        includeAddIcon: true,
        textColor: 'orange',
        backgroundColor: 'red',
        hoverTextColor: 'green',
        hoverBackgroundColor: 'blue',
        width: 'fit-content'
    }
  },
};

export const ButtonWithoutAddIconFitContent: Story = {
  args: {
    text: 'button text',
    type: {
        includeAddIcon: false,
        textColor: 'orange',
        backgroundColor: 'red',
        hoverTextColor: 'green',
        hoverBackgroundColor: 'blue',
        width: 'fit-content'
    }
  },
};

export const ButtonWithAddIconFullWidth: Story = {
  args: {
    text: 'button text',
    type: {
        includeAddIcon: true,
        textColor: 'orange',
        backgroundColor: 'red',
        hoverTextColor: 'green',
        hoverBackgroundColor: 'blue',
        width: '100%'
    }
  },
};

export const ButtonWithoutAddIconFullWidth: Story = {
  args: {
    text: 'button text',
    type: {
        includeAddIcon: false,
        textColor: 'orange',
        backgroundColor: 'red',
        hoverTextColor: 'green',
        hoverBackgroundColor: 'blue',
        width: '100%'
    }
  },
};