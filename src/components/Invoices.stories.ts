import type { Meta, StoryObj } from '@storybook/react';

import { Invoices } from './Invoices';
import { Status } from '../data/types/Data';

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
        "id": "XM9141",
        "createdAt": "2021-08-21",
        "paymentDue": "2021-09-20",
        "description": "Graphic Design",
        "paymentTerms": 30,
        "clientName": "Alex Grim",
        "clientEmail": "alexgrim@mail.com",
        "status": Status.Pending,
        "senderAddress": {
          "street": "19 Union Terrace",
          "city": "London",
          "postCode": "E1 3EZ",
          "country": "United Kingdom"
        },
        "clientAddress": {
          "street": "84 Church Way",
          "city": "Bradford",
          "postCode": "BD1 9PB",
          "country": "United Kingdom"
        },
        "items": [
          {
            "name": "Banner Design",
            "quantity": 1,
            "price": 156.00,
            "total": 156.00
          },
          {
            "name": "Email Design",
            "quantity": 2,
            "price": 200.00,
            "total": 400.00
          }
        ],
        "total": 556.00
      },
      {
        "id": "RG0314",
        "createdAt": "2021-09-24",
        "paymentDue": "2021-10-01",
        "description": "Website Redesign",
        "paymentTerms": 7,
        "clientName": "John Morrison",
        "clientEmail": "jm@myco.com",
        "status": Status.Paid,
        "senderAddress": {
          "street": "19 Union Terrace",
          "city": "London",
          "postCode": "E1 3EZ",
          "country": "United Kingdom"
        },
        "clientAddress": {
          "street": "79 Dover Road",
          "city": "Westhall",
          "postCode": "IP19 3PF",
          "country": "United Kingdom"
        },
        "items": [
          {
            "name": "Website Redesign",
            "quantity": 1,
            "price": 14002.33,
            "total": 14002.33
          }
        ],
        "total": 14002.33
      },
    ]
  }
}