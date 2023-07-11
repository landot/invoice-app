import type { Meta, StoryObj } from '@storybook/react';

import { ItemList } from './ItemList';

const meta = {
  title: 'ItemList',
  component: ItemList,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof ItemList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        items: [
            {
              "name": "Brand Guidelines",
              "quantity": 1,
              "price": 1800.90,
              "total": 1800.90
            },
            {
                "name": "Brand Guidelines 2",
                "quantity": 1,
                "price": 1800.90,
                "total": 1800.90
            }
        ],
    },
}