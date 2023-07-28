import { DestructiveButtonStyle } from "../data/types/DestructiveButtonStyle";
import { SecondaryButtonStyle } from "../data/types/SecondaryButtonStyle";
import {
  DeleteModalStyles,
  DeleteModalActionsStyles,
} from "../styles/components/DeleteModal.styles";
import { HeadingM } from "../styles/header/HeadingM.styles";
import { TextVariant } from "../styles/text/TextVariant.styles";
import { StyledButton } from "./Button";
import { useAppDispatch } from "../../app/hooks";
import { deleteInvoice } from "../../features/invoice/invoiceSlice";
import { useNavigate } from "react-router-dom";

export function DeleteModal(props: { id: string; hideModal: () => void }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleDelete() {
    dispatch(deleteInvoice(props.id));
    navigate("/");
  }

  return (
    <DeleteModalStyles>
      <HeadingM>Confirm Deletion</HeadingM>
      <TextVariant>
        Are you sure you want to delete invoice #{props.id}? This action cannot
        be undone.
      </TextVariant>
      <DeleteModalActionsStyles>
        <StyledButton
          testId="delete-modal-cancel"
          text="Cancel"
          type={{
            includeAddIcon: false,
            width: "fit-content",
            ...SecondaryButtonStyle,
          }}
          onClick={() => props.hideModal()}
        />
        <StyledButton
          testId="delete-modal-delete"
          text="Delete"
          type={{
            includeAddIcon: false,
            width: "fit-content",
            ...DestructiveButtonStyle,
          }}
          onClick={handleDelete}
        />
      </DeleteModalActionsStyles>
    </DeleteModalStyles>
  );
}
