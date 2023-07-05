import type { Meta, StoryObj } from '@storybook/react';

import { Invoice } from './Invoice';
import { Status } from '../data/types/Data';

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
      "id": "RT3080",
      "createdAt": "2021-08-18",
      "paymentDue": "2021-08-19",
      "description": "Re-branding",
      "paymentTerms": 1,
      "clientName": "Jensen Huang",
      "clientEmail": "jensenh@mail.com",
      "status": Status.Paid,
      "senderAddress": {
        "street": "19 Union Terrace",
        "city": "London",
        "postCode": "E1 3EZ",
        "country": "United Kingdom"
      },
      "clientAddress": {
        "street": "106 Kendell Street",
        "city": "Sharrington",
        "postCode": "NR24 5WQ",
        "country": "United Kingdom"
      },
      "items": [
        {
          "name": "Brand Guidelines",
          "quantity": 1,
          "price": 1800.90,
          "total": 1800.90
        }
      ],
      "total": 1800.90
    }
  }
}