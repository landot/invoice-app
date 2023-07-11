import { useState } from "react";
import { InvoiceData, Item } from "../data/types/Data";
import { HeadingM } from "../styles/header/HeadingM.styles";
import { TextField } from "./TextField";
import { Dropdown } from "./Dropdown";
import { StyledDatePicker } from "./DatePicker";
import { StyledButton } from "./Button";
import { PrimaryButtonStyle } from "../data/types/PrimaryButtonStyle";
import { SecondaryButtonStyle } from "../data/types/SecondaryButtonStyle";
import { HeadingS } from "../styles/header/HeadingS.styles";
import update from 'immutability-helper';
import { EditStyles, EditHeaderStyles, EditScrollableStyles, EditBillStyles, FieldStyles, EditActions } from "../styles/components/EditInvoice.styles";
import { ItemList } from "./ItemList";


export function EditInvoice(props: {
    prefill: InvoiceData,
    handleCancel: () => void,
    handleSave: () => void,
}) {
    const [invoiceData, setInvoiceData] = useState<InvoiceData>(props.prefill);

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
                <HeadingM>Edit #{invoiceData.id}</HeadingM>
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
                <StyledButton 
                    text='Cancel' 
                    type={{
                        includeAddIcon: false,
                        width: 'fit-content',
                        ...SecondaryButtonStyle
                    }} 
                    onClick={props.handleCancel}
                />
                <StyledButton 
                    text='Save Changes' 
                    type={{
                        includeAddIcon: false,
                        width: 'fit-content',
                        ...PrimaryButtonStyle
                    }} 
                    onClick={props.handleSave}
                />
            </EditActions>
        </EditStyles>
    )
}