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
import update from "immutability-helper";
import { ItemList } from "./ItemList";
import {
  EditStyles,
  EditHeaderStyles,
  EditScrollableStyles,
  EditBillStyles,
  FieldStyles,
  EditActions,
  AddActionButtonStyles,
  AddSaveButtonStyles,
  EditContainerStyles,
} from "../styles/components/EditInvoice.styles";
import { getNewIdWithoutDuplicates } from "../utils/getNewIdWithoutDuplicates";
import { DarkButtonStyle } from "../data/types/DarkButtonStyles";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addInvoice, editInvoice } from "../../features/invoice/invoiceSlice";
import useWindowSize from "../utils/useWindowSize";
import { Sidebar } from "./Sidebar";
import { ReactComponent as BackIcon } from "../assets/icon-arrow-left.svg";
import { GoBackStyles } from "../styles/components/ViewInvoice.styles";
import { useNavigate } from "react-router-dom";
import { selectInvoices } from "../../features/invoice/invoiceSlice";

export interface InputError {
  field: string;
  description: string
}

export function EditInvoice(props: {
  type: "edit" | "add";
  prefill?: InvoiceData;
  hideModal: () => void;
}) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const invoices = useAppSelector(selectInvoices);
  const emptyInvoice: InvoiceData = {
    id: getNewIdWithoutDuplicates(invoices.map((invoice) => invoice.id)),
    createdAt: new Date().getTime(),
    paymentTerms: 1,
    paymentDue: new Date().getTime() + 86400000,
    description: "",
    clientName: "",
    clientEmail: "",
    status: Status.Pending,
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    items: [
      {
        name: "",
        quantity: 0,
        price: 0,
        total: 0,
      },
    ],
    total: 0,
  };
  const [invoiceData, setInvoiceData] = useState<InvoiceData>(
    props.prefill || emptyInvoice,
  );
  const [errors, setErrors] = useState<InputError[]>([]);
  const size = useWindowSize();

  function validate(): boolean {
    const newErrors: InputError[] = [];
    if (invoiceData.senderAddress.street === "") {
      newErrors.push({
        field: "senderAddress.street",
        description: "can't be empty",
      });
    }
    if (invoiceData.senderAddress.city === "") {
      newErrors.push({
        field: "senderAddress.city",
        description: "can't be empty",
      });
    }
    if (invoiceData.senderAddress.postCode === "") {
      newErrors.push({
        field: "senderAddress.postCode",
        description: "can't be empty",
      });
    }
    if (invoiceData.senderAddress.country === "") {
      newErrors.push({
        field: "senderAddress.country",
        description: "can't be empty",
      });
    }
    if (invoiceData.clientName === "") {
      newErrors.push({ field: "clientName", description: "can't be empty" });
    }
    if (invoiceData.clientEmail === "") {
      newErrors.push({ field: "clientEmail", description: "can't be empty" });
    }
    if (invoiceData.clientAddress.street === "") {
      newErrors.push({
        field: "clientAddress.street",
        description: "can't be empty",
      });
    }
    if (invoiceData.clientAddress.city === "") {
      newErrors.push({
        field: "clientAddress.city",
        description: "can't be empty",
      });
    }
    if (invoiceData.clientAddress.postCode === "") {
      newErrors.push({
        field: "clientAddress.postCode",
        description: "can't be empty",
      });
    }
    if (invoiceData.clientAddress.country === "") {
      newErrors.push({
        field: "clientAddress.country",
        description: "can't be empty",
      });
    }
    if (invoiceData.description === "") {
      newErrors.push({ field: "description", description: "can't be empty" });
    }
    const itemErrors = invoiceData.items.map((item) => {
      return (
        item.name === "" ||
        item.price <= 0 ||
        isNaN(item.price) ||
        item.quantity <= 0 ||
        isNaN(item.quantity)
      );
    });
    if (itemErrors.find((e) => e === true) || invoiceData.items.length === 0) {
      newErrors.push({
        field: "items",
        description: "An item must be added and total must be greater than 0",
      });
    }
    setErrors(newErrors);

    return newErrors.length > 0;
  }

  function handleSave() {
    const hasErrors = validate();
    if (hasErrors) {
      console.log("there are errors");
    } else {
      props.hideModal();
      dispatch(addInvoice(invoiceData));
    }
  }

  function handleEdit() {
    const hasErrors = validate();
    if (hasErrors) {
      console.log("there are errors");
    } else {
      props.hideModal();
      dispatch(
        editInvoice({ invoiceId: invoiceData.id, updatedInvoice: invoiceData }),
      );
    }
  }

  function handleDraft() {
    const hasErrors = validate();
    if (hasErrors) {
      console.log("there are errors");
    } else {
      props.hideModal();
      dispatch(
        addInvoice({
          ...invoiceData,
          status: Status.Draft,
        }),
      );
    }
  }

  function inputHasError(inputName: string): boolean {
    return errors.find((error) => error.field == inputName) !== undefined;
  }

  function getErrorText(inputName: string): string {
    return errors.find((error) => error.field == inputName)?.description || "";
  }

  function handleInvoiceDateChange(timestamp: number) {
    setInvoiceData((prev) => {
      return {
        ...prev,
        createdAt: timestamp,
        paymentDue: timestamp + 86400000 * prev.paymentTerms,
      };
    });
  }

  function handlePaymentTermsChange(paymentTerms: number) {
    setInvoiceData((prev) => {
      return {
        ...prev,
        paymentTerms: paymentTerms,
        paymentDue: prev.createdAt + 86400000 * paymentTerms,
      };
    });
  }

  function handleItemChange(updatedItems: Item[]) {
    setInvoiceData((prev) => {
      return {
        ...prev,
        items: updatedItems,
      };
    });
  }

  return (
    <EditContainerStyles>
      {size.width && size.width <= 500 && <Sidebar />}
      <EditStyles>
        {size.width && size.width <= 500 && (
          <GoBackStyles>
            <BackIcon />
            <a
              onClick={() => {
                navigate("/");
                props.hideModal();
              }}
            >
              <HeadingS>Go back</HeadingS>
            </a>
          </GoBackStyles>
        )}
        <EditHeaderStyles>
          <HeadingM>
            {props.type === "add" ? "New Invoice" : `Edit #${invoiceData.id}`}
          </HeadingM>
        </EditHeaderStyles>
        <EditScrollableStyles>
          <EditBillStyles>
            <HeadingS>Bill From</HeadingS>
            <TextField
              error={inputHasError("senderAddress.street")}
              errorText={getErrorText("senderAddress.street")}
              inputType="text"
              title={"Street Address"}
              value={invoiceData.senderAddress.street}
              handleChange={(value: string) => {
                setInvoiceData((prev) =>
                  update(prev, { senderAddress: { street: { $set: value } } }),
                );
              }}
            />
            <FieldStyles>
              <TextField
                error={inputHasError("senderAddress.city")}
                errorText={getErrorText("senderAddress.city")}
                inputType="text"
                title={"City"}
                value={invoiceData.senderAddress.city}
                handleChange={(value: string) => {
                  setInvoiceData((prev) =>
                    update(prev, { senderAddress: { city: { $set: value } } }),
                  );
                }}
              />
              <TextField
                error={inputHasError("senderAddress.postCode")}
                errorText={getErrorText("senderAddress.postCode")}
                inputType="text"
                title={"Post Code"}
                value={invoiceData.senderAddress.postCode}
                handleChange={(value: string) => {
                  setInvoiceData((prev) =>
                    update(prev, {
                      senderAddress: { postCode: { $set: value } },
                    }),
                  );
                }}
              />
              <TextField
                error={inputHasError("senderAddress.country")}
                errorText={getErrorText("senderAddress.country")}
                inputType="text"
                title={"Country"}
                value={invoiceData.senderAddress.country}
                handleChange={(value: string) => {
                  setInvoiceData((prev) =>
                    update(prev, {
                      senderAddress: { country: { $set: value } },
                    }),
                  );
                }}
              />
            </FieldStyles>
          </EditBillStyles>
          <EditBillStyles>
            <HeadingS>Bill To</HeadingS>
            <TextField
              error={inputHasError("clientName")}
              errorText={getErrorText("clientName")}
              inputType="text"
              title={"Client's Name"}
              value={invoiceData.clientName}
              handleChange={(value: string) => {
                setInvoiceData((prev) =>
                  update(prev, { clientName: { $set: value } }),
                );
              }}
            />
            <TextField
              error={inputHasError("clientEmail")}
              errorText={getErrorText("clientEmail")}
              placeholder="e.g. email@example.com"
              inputType="text"
              title={"Client's Email"}
              value={invoiceData.clientEmail}
              handleChange={(value: string) => {
                setInvoiceData((prev) =>
                  update(prev, { clientEmail: { $set: value } }),
                );
              }}
            />
            <TextField
              error={inputHasError("clientAddress.street")}
              errorText={getErrorText("clientAddress.street")}
              inputType="text"
              title={"Street Address"}
              value={invoiceData.clientAddress.street}
              handleChange={(value: string) => {
                setInvoiceData((prev) =>
                  update(prev, { clientAddress: { street: { $set: value } } }),
                );
              }}
            />
            <FieldStyles>
              <TextField
                error={inputHasError("clientAddress.city")}
                errorText={getErrorText("clientAddress.city")}
                inputType="text"
                title={"City"}
                value={invoiceData.clientAddress.city}
                handleChange={(value: string) => {
                  setInvoiceData((prev) =>
                    update(prev, { clientAddress: { city: { $set: value } } }),
                  );
                }}
              />
              <TextField
                error={inputHasError("clientAddress.postCode")}
                errorText={getErrorText("clientAddress.postCode")}
                inputType="text"
                title={"Post Code"}
                value={invoiceData.clientAddress.postCode}
                handleChange={(value: string) => {
                  setInvoiceData((prev) =>
                    update(prev, {
                      clientAddress: { postCode: { $set: value } },
                    }),
                  );
                }}
              />
              <TextField
                error={inputHasError("clientAddress.country")}
                errorText={getErrorText("clientAddress.country")}
                inputType="text"
                title={"Country"}
                value={invoiceData.clientAddress.country}
                handleChange={(value: string) => {
                  setInvoiceData((prev) =>
                    update(prev, {
                      clientAddress: { country: { $set: value } },
                    }),
                  );
                }}
              />
            </FieldStyles>
            <FieldStyles>
              <StyledDatePicker
                title={"Invoice Date"}
                selectedDate={invoiceData.createdAt}
                handleChange={handleInvoiceDateChange}
              />
              <Dropdown
                title={"Payment Terms"}
                data={[
                  { name: "Net 1 Day", value: 1 },
                  { name: "Net 7 Day", value: 7 },
                  { name: "Net 14 Day", value: 14 },
                  { name: "Net 30 Day", value: 30 },
                ]}
                selectedValue={invoiceData.paymentTerms}
                handleChange={handlePaymentTermsChange}
              />
            </FieldStyles>
            <TextField
              error={inputHasError("description")}
              errorText={getErrorText("description")}
              placeholder="e.g. Graphic Design Service"
              inputType="text"
              title={"Project Description"}
              value={invoiceData.description}
              handleChange={(value: string) => {
                setInvoiceData((prev) =>
                  update(prev, { description: { $set: value } }),
                );
              }}
            />
          </EditBillStyles>
          <ItemList
            items={invoiceData.items}
            handleItemUpdate={handleItemChange}
            showErrors={errors.length > 0}
          />
        </EditScrollableStyles>
        <EditActions>
          {props.type === "edit" && (
            <>
              <StyledButton
                text="Cancel"
                type={{
                  includeAddIcon: false,
                  width: "fit-content",
                  ...SecondaryButtonStyle,
                }}
                onClick={props.hideModal}
              />
              <StyledButton
                text="Save Changes"
                type={{
                  includeAddIcon: false,
                  width: "fit-content",
                  ...PrimaryButtonStyle,
                }}
                onClick={handleEdit}
              />
            </>
          )}
          {props.type === "add" && (
            <AddActionButtonStyles>
              <StyledButton
                text="Discard"
                type={{
                  includeAddIcon: false,
                  width: "fit-content",
                  ...SecondaryButtonStyle,
                }}
                onClick={props.hideModal}
              />
              <AddSaveButtonStyles>
                <StyledButton
                  text="Save as Draft"
                  type={{
                    includeAddIcon: false,
                    width: "fit-content",
                    ...DarkButtonStyle,
                  }}
                  onClick={handleDraft}
                />
                <StyledButton
                  text="Save & Send"
                  type={{
                    includeAddIcon: false,
                    width: "fit-content",
                    ...PrimaryButtonStyle,
                  }}
                  onClick={handleSave}
                />
              </AddSaveButtonStyles>
            </AddActionButtonStyles>
          )}
        </EditActions>
      </EditStyles>
    </EditContainerStyles>
  );
}
