import { useState } from "react";
import { InvoiceData, Item, Status } from "../data/types/Data";
import { HeadingM } from "../styles/header/HeadingM.styles";
import { TextField } from "./TextField";
import { Dropdown } from "./Dropdown";
import { StyledDatePicker } from "./DatePicker";
import { StyledButton } from "./Button";
import { PrimaryButtonStyle } from "../data/types/PrimaryButtonStyle";
import { SecondaryButtonStyle } from "../data/types/SecondaryButtonStyle";
import { HeadingS } from "../styles/header/HeadingS.styles";
import update from 'immutability-helper';
import { ItemList } from "./ItemList";
import { EditStyles, EditHeaderStyles, EditScrollableStyles, EditBillStyles, FieldStyles, EditActions } from "../styles/components/EditInvoice.styles";
import { getUUID } from "../utils/getUUID";
import { DarkButtonStyle } from "../data/types/DarkButtonStyles";
import styled from "styled-components";
import { useAppDispatch } from "../../app/hooks";
import { addInvoice, editInvoice } from "../../features/invoice/invoiceSlice";


export const AddActionButtonStyles = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const AddSaveButtonStyles = styled.div`
    display: flex;
    gap: 8px;
`


export function EditInvoice(props: {
    type: 'edit' | 'add',
    prefill?: InvoiceData,
    hideModal: () => void
}) {
    const dispatch = useAppDispatch();
    const emptyInvoice: InvoiceData = {
        id: getUUID(),
        createdAt: new Date().getTime(),
        paymentTerms: 1,
        paymentDue: new Date().getTime() + 86400000,
        description: '',
        clientName: '',
        clientEmail: '',
        status: Status.Pending,
        senderAddress: {
            street: '',
            city: '',
            postCode: '',
            country: ''
        },
        clientAddress: {
            street: '',
            city: '',
            postCode: '',
            country: ''
        },
        items: [
            {
                name: '',
                quantity: 0,
                price: 0,
                total: 0
            }
        ],
        total: 0
    }
    const [invoiceData, setInvoiceData] = useState<InvoiceData>(props.prefill || emptyInvoice);

    // function validate(): boolean {
    //     return true;
    // }

    function handleInvoiceDateChange(timestamp: number) {
        setInvoiceData(prev => {
            return {
                ...prev,
                createdAt: timestamp,
                paymentDue: timestamp + (86400000 * prev.paymentTerms)
            }
        })
    }

    function handlePaymentTermsChange(paymentTerms: number) {
        setInvoiceData(prev => {
            return {
                ...prev,
                paymentTerms: paymentTerms,
                paymentDue: prev.createdAt + (86400000 * paymentTerms)
            }
        })
    }

    function handleItemChange(updatedItems: Item[]) {
        setInvoiceData(prev => {
            return {
                ...prev,
                items: updatedItems
            }
        })
    }
    
    return (
        <EditStyles>
            <EditHeaderStyles>
                <HeadingM>{props.type === 'add' ? 'New Invoice': `Edit #${invoiceData.id}`}</HeadingM>
            </EditHeaderStyles>
            <EditScrollableStyles>
                <EditBillStyles>
                    <HeadingS>Bill From</HeadingS>
                    <TextField inputType='text' title={'Street Address'} value={invoiceData.senderAddress.street} handleChange={(value: string) => {
                        setInvoiceData(prev => update(prev, {senderAddress: {street: {$set: value}}}))
                    }}/>
                    <FieldStyles>
                        <TextField inputType='text' title={'City'} value={invoiceData.senderAddress.city}  handleChange={(value: string) => {
                            setInvoiceData(prev => update(prev, {senderAddress: {city: {$set: value}}}))
                        }}/>
                        <TextField inputType='text' title={'Post Code'} value={invoiceData.senderAddress.postCode}  handleChange={(value: string) => {
                            setInvoiceData(prev => update(prev, {senderAddress: {postCode: {$set: value}}}))
                        }}/>
                        <TextField inputType='text' title={'Country'} value={invoiceData.senderAddress.country}  handleChange={(value: string) => {
                            setInvoiceData(prev => update(prev, {senderAddress: {country: {$set: value}}}))
                        }}/>
                    </FieldStyles>
                </EditBillStyles>
                <EditBillStyles>
                    <HeadingS>Bill To</HeadingS>
                    <TextField inputType='text' title={"Client's Name"} value={invoiceData.clientName} handleChange={(value: string) => {
                        setInvoiceData(prev => update(prev, {clientName: {$set: value}}))
                    }}/>
                    <TextField inputType='text' title={"Client's Email"} value={invoiceData.clientEmail} handleChange={(value: string) => {
                        setInvoiceData(prev => update(prev, {clientEmail: {$set: value}}))
                    }}/>
                    <TextField inputType='text' title={'Street Address'} value={invoiceData.clientAddress.street} handleChange={(value: string) => {
                        setInvoiceData(prev => update(prev, {clientAddress: {street: {$set: value}}}))
                    }}/>
                    <FieldStyles>
                        <TextField inputType='text' title={'City'} value={invoiceData.clientAddress.city}  handleChange={(value: string) => {
                            setInvoiceData(prev => update(prev, {clientAddress: {city: {$set: value}}}))
                        }}/>
                        <TextField inputType='text' title={'Post Code'} value={invoiceData.clientAddress.postCode}  handleChange={(value: string) => {
                            setInvoiceData(prev => update(prev, {clientAddress: {postCode: {$set: value}}}))
                        }}/>
                        <TextField inputType='text' title={'Country'} value={invoiceData.clientAddress.country}  handleChange={(value: string) => {
                            setInvoiceData(prev => update(prev, {clientAddress: {country: {$set: value}}}))
                        }}/>
                    </FieldStyles>
                    <FieldStyles>
                        <StyledDatePicker title={"Invoice Date"} selectedDate={invoiceData.createdAt} handleChange={handleInvoiceDateChange}/>
                        <Dropdown 
                            title={"Payment Terms"} 
                            data={[
                                {name: 'Net 1 Day', value: 1},
                                {name: 'Net 7 Day', value: 7},
                                {name: 'Net 14 Day', value: 14},
                                {name: 'Net 30 Day', value: 30},
                            ]} 
                            selectedValue={invoiceData.paymentTerms} 
                            handleChange={handlePaymentTermsChange} />
                    </FieldStyles>
                    <TextField inputType='text' title={'Project Description'} value={invoiceData.description}  handleChange={(value: string) => {
                            setInvoiceData(prev => update(prev, {description: {$set: value}}))
                        }}/>
                </EditBillStyles>
                <ItemList items={invoiceData.items} handleItemUpdate={handleItemChange} />
            </EditScrollableStyles>
            <EditActions>
                {props.type === 'edit' && (
                    <>
                        <StyledButton 
                            text='Cancel' 
                            type={{
                                includeAddIcon: false,
                                width: 'fit-content',
                                ...SecondaryButtonStyle
                            }} 
                            onClick={props.hideModal}
                        />
                        <StyledButton 
                            text='Save Changes' 
                            type={{
                                includeAddIcon: false,
                                width: 'fit-content',
                                ...PrimaryButtonStyle
                            }} 
                            onClick={() => {
                                props.hideModal();
                                dispatch(editInvoice({invoiceId: invoiceData.id, updatedInvoice: invoiceData}));
                            }}
                        />
                    </>
                )}
                {props.type === 'add' && (
                    <AddActionButtonStyles>
                        <StyledButton 
                            text='Discard' 
                            type={{
                                includeAddIcon: false,
                                width: 'fit-content',
                                ...SecondaryButtonStyle
                            }} 
                            onClick={props.hideModal}
                        />
                        <AddSaveButtonStyles>
                            <StyledButton 
                                text='Save as Draft' 
                                type={{
                                    includeAddIcon: false,
                                    width: 'fit-content',
                                    ...DarkButtonStyle
                                }} 
                                onClick={() => {
                                    props.hideModal();
                                    dispatch(addInvoice({
                                        ...invoiceData,
                                        status: Status.Draft
                                    }));
                            }}
                            />
                            <StyledButton 
                                text='Save & Send' 
                                type={{
                                    includeAddIcon: false,
                                    width: 'fit-content',
                                    ...PrimaryButtonStyle
                                }} 
                                onClick={() => {
                                    props.hideModal();
                                    dispatch(addInvoice(invoiceData));
                                }}
                            />
                        </AddSaveButtonStyles>
                    </AddActionButtonStyles>
                )}
            </EditActions>
        </EditStyles>
    )
}