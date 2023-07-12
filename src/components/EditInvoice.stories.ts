import type { Meta, StoryObj } from '@storybook/react';

import { EditInvoice } from './EditInvoice';
import { Status } from '../data/types/Data';

const meta = {
  title: 'EditInvoice',
  component: EditInvoice,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof EditInvoice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Add: Story = {
    args: {
        type: 'add',
    }      
}

export const Edit: Story = {
  args: {
      type: 'edit',
      prefill: {
        "id": "RT3080",
        "createdAt": 1629321408000,
        "paymentDue": 1629407808000,
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
      },
  }      
}