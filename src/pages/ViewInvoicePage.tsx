import styled from "styled-components";
import { Status } from "../data/types/Data"
import { Page } from "./Page";
import { ViewInvoice } from "../components/ViewInvoice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DeleteModal } from "../components/DeleteModal";
import { CenterOverlay } from "../components/CenterOverlay";
import { LeftOverlay } from "../components/LeftOverlay";
import { EditInvoice } from "../components/EditInvoice";
import { useParams } from "react-router-dom";

export const ViewInvoicePageStyles = styled.div``

export function ViewInvoicePage() {
    const navigate = useNavigate();
    const params = useParams();
    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const tempData = {
        "id": params.id || 'id not found',
        "createdAt": 1629321408000,
        "paymentDue": 1629407808000,
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
    };

    return (
        <Page>
            <ViewInvoicePageStyles>
                {showDelete && (
                    <CenterOverlay handleClose={() => setShowDelete(false)}>
                        <DeleteModal id={tempData.id} handleDelete={() => null} handleCancel={() => setShowDelete(false)} />
                    </CenterOverlay>
                )}
                {showEdit && (
                    <LeftOverlay handleClose={() => null}>
                        <EditInvoice prefill={tempData} handleSave={() => null} handleCancel={() => setShowEdit(false)} />
                    </LeftOverlay>
                )}
                <ViewInvoice 
                    invoice={tempData} 
                    handleEdit={() => setShowEdit(true)}
                    handleDelete={() => setShowDelete(true)} 
                    handleMarkAsPaid={() => null} 
                    handleGoBack={() => navigate('/')} 
                />
            </ViewInvoicePageStyles>
        </Page>
    )
}