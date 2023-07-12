import styled from "styled-components";
import { Page } from "./Page";
import { ViewInvoice } from "../components/ViewInvoice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DeleteModal } from "../components/DeleteModal";
import { CenterOverlay } from "../components/CenterOverlay";
import { LeftOverlay } from "../components/LeftOverlay";
import { EditInvoice } from "../components/EditInvoice";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectInvoices } from "../../features/invoice/invoiceSlice";

export const ViewInvoicePageStyles = styled.div``

export function ViewInvoicePage() {
    const navigate = useNavigate();
    const params = useParams();
    const [invoice] = useAppSelector(selectInvoices).filter(invoice => invoice.id === params.id);
    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    return (
        <Page>
            <ViewInvoicePageStyles>
                {showDelete && (
                    <CenterOverlay handleClose={() => setShowDelete(false)}>
                        <DeleteModal id={invoice.id} hideModal={() => setShowDelete(false)} />
                    </CenterOverlay>
                )}
                {showEdit && (
                    <LeftOverlay handleClose={() => null}>
                        <EditInvoice 
                            type='edit'
                            prefill={invoice} 
                            hideModal={() => setShowEdit(false)} 
                        />
                    </LeftOverlay>
                )}
                <ViewInvoice 
                    invoice={invoice} 
                    handleEdit={() => setShowEdit(true)}
                    handleDelete={() => setShowDelete(true)} 
                    handleGoBack={() => navigate('/')} 
                />
            </ViewInvoicePageStyles>
        </Page>
    )
}