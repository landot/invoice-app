import type { Meta, StoryObj } from "@storybook/react";

import { Invoices } from "./Invoices";
import { Status } from "../data/types/Data";

const meta = {
  title: "Invoices",
  component: Invoices,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Invoices>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    invoices: [
      {
        id: "XM9141",
        createdAt: 1629321408000,
        paymentDue: 1629407808000,
        description: "Graphic Design",
        paymentTerms: 30,
        clientName: "Alex Grim",
        clientEmail: "alexgrim@mail.com",
        status: Status.Pending,
        senderAddress: {
          street: "19 Union Terrace",
          city: "London",
          postCode: "E1 3EZ",
          country: "United Kingdom",
        },
        clientAddress: {
          street: "84 Church Way",
          city: "Bradford",
          postCode: "BD1 9PB",
          country: "United Kingdom",
        },
        items: [
          {
            name: "Banner Design",
            quantity: 1,
            price: 156.0,
            total: 156.0,
          },
          {
            name: "Email Design",
            quantity: 2,
            price: 200.0,
            total: 400.0,
          },
        ],
        total: 556.0,
      },
      {
        id: "RG0314",
        createdAt: 1629580608000,
        paymentDue: 1629494208000,
        description: "Website Redesign",
        paymentTerms: 7,
        clientName: "John Morrison",
        clientEmail: "jm@myco.com",
        status: Status.Paid,
        senderAddress: {
          street: "19 Union Terrace",
          city: "London",
          postCode: "E1 3EZ",
          country: "United Kingdom",
        },
        clientAddress: {
          street: "79 Dover Road",
          city: "Westhall",
          postCode: "IP19 3PF",
          country: "United Kingdom",
        },
        items: [
          {
            name: "Website Redesign",
            quantity: 1,
            price: 14002.33,
            total: 14002.33,
          },
        ],
        total: 14002.33,
      },
    ],
  },
};
