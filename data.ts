import { InvoiceData, Status } from "./src/data/types/Data";

export const sampleData: InvoiceData[] = [
    {
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
    {
      "id": "XM9141",
      "createdAt": 1629580608000,
      "paymentDue": 1629494208000,
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
      "createdAt": 1632518208000,
      "paymentDue": 1633123008000,
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
    {
      "id": "RT2080",
      "createdAt": 1633987008000,
      "paymentDue": 1634073408000,
      "description": "Logo Concept",
      "paymentTerms": 1,
      "clientName": "Alysa Werner",
      "clientEmail": "alysa@email.co.uk",
      "status": Status.Pending,
      "senderAddress": {
        "street": "19 Union Terrace",
        "city": "London",
        "postCode": "E1 3EZ",
        "country": "United Kingdom"
      },
      "clientAddress": {
        "street": "63 Warwick Road",
        "city": "Carlisle",
        "postCode": "CA20 2TG",
        "country": "United Kingdom"
      },
      "items": [
        {
          "name": "Logo Sketches",
          "quantity": 1,
          "price": 102.04,
          "total": 102.04
        }
      ],
      "total": 102.04
    },
    {
      "id": "AA1449",
      "createdAt": 1633641408000,
      "paymentDue": 1634246208000,
      "description": "Re-branding",
      "paymentTerms": 7,
      "clientName": "Mellisa Clarke",
      "clientEmail": "mellisa.clarke@example.com",
      "status": Status.Pending,
      "senderAddress": {
        "street": "19 Union Terrace",
        "city": "London",
        "postCode": "E1 3EZ",
        "country": "United Kingdom"
      },
      "clientAddress": {
        "street": "46 Abbey Row",
        "city": "Cambridge",
        "postCode": "CB5 6EG",
        "country": "United Kingdom"
      },
      "items": [
        {
          "name": "New Logo",
          "quantity": 1,
          "price": 1532.33,
          "total": 1532.33
        },
        {
          "name": "Brand Guidelines",
          "quantity": 1,
          "price": 2500.00,
          "total": 2500.00
        }
      ],
      "total": 4032.33
    },
    {
      "id": "TY9141",
      "createdAt": 1633123008000,
      "paymentDue": 1635715008000,
      "description": "Landing Page Design",
      "paymentTerms": 30,
      "clientName": "Thomas Wayne",
      "clientEmail": "thomas@dc.com",
      "status": Status.Pending,
      "senderAddress": {
        "street": "19 Union Terrace",
        "city": "London",
        "postCode": "E1 3EZ",
        "country": "United Kingdom"
      },
      "clientAddress": {
        "street": "3964  Queens Lane",
        "city": "Gotham",
        "postCode": "60457",
        "country": "United States of America"
      },
      "items": [
        {
          "name": "Web Design",
          "quantity": 1,
          "price": 6155.91,
          "total": 6155.91
        }
      ],
      "total": 6155.91
    },
    {
      "id": "FV2353",
      "createdAt": 1636147008000,
      "paymentDue": 1636751808000,
      "description": "Logo Re-design",
      "paymentTerms": 7,
      "clientName": "Anita Wainwright",
      "clientEmail": "",
      "status": Status.Draft,
      "senderAddress": {
        "street": "19 Union Terrace",
        "city": "London",
        "postCode": "E1 3EZ",
        "country": "United Kingdom"
      },
      "clientAddress": {
        "street": "",
        "city": "",
        "postCode": "",
        "country": ""
      },
      "items": [
        {
          "name": "Logo Re-design",
          "quantity": 1,
          "price": 3102.04,
          "total": 3102.04
        }
      ],
      "total": 3102.04
    }
  ]
  