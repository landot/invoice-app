import styled from "styled-components";
import { HeadingSAlt } from "../header/AlternateHeadingS.styles";
import { HeadingM } from "../header/HeadingM.styles";
import { HeadingS } from "../header/HeadingS.styles";
import { BodyText } from "../text/Text.styles";
import { Box } from "./Box.styles";

export const ViewInvoiceHeaderLeftStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const ViewInvoiceHeaderRightStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
    background: ${({ theme }) => theme.colors.white};
    padding: 20px;
    margin-top: 40px;
  }
`;

export const ViewInvoiceHeaderStyles = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 32px;

  @media (max-width: 600px) {
    padding: 27px 24px;
  }
`;

export const ViewInvoiceRefStyles = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 30px;
  }
`;

export const ViewInvoiceBodyStyles = styled(Box)`
  padding: 48px;

  @media (max-width: 600px) {
    padding: 24px;
  }
`;
export const ViewInvoiceItemStyles = styled.div``;
export const ViewInvoiceBillingInfoStyles = styled.div``;
export const ViewInvoiceDateStyles = styled.div`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

export const ViewInvoiceBillingStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 100px;

  @media (max-width: 700px) {
    margin-right: 0;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;

    ${ViewInvoiceDateStyles}, ${ViewInvoiceBillingInfoStyles} {
      flex-basis: 50%;
      margin-bottom: 32px;
    }
  }
`;

export const AmountDueStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0px 0px 8px 8px;
  background: ${({ theme }) => theme.colors.darkGray};
  padding: 27px 32px 21px 32px;

  ${HeadingM}, ${BodyText} {
    color: ${({ theme }) => `${theme.colors.white} !important`};
  }
`;

export const TableHeaderAlignLeft = styled.th`
  text-align: left;
`;

export const TableHeaderAlignRight = styled.th`
  text-align: right;
`;

export const TableHeaderAlignCenter = styled.th`
  text-align: center;
`;

export const TableCellAlignLeft = styled.td`
  text-align: left;
`;

export const TableCellAlignRight = styled.td`
  text-align: right;
`;

export const TableCellAlignCenter = styled.td`
  text-align: center;
`;

export const InvoiceTableStyles = styled.table`
  width: 100%;
  border-radius: 8px 8px 0px 0px;
  background: ${({ theme }) => theme.colors.lightGray};
  padding: 0 32px;
  border-spacing: 0 32px;
`;

export const ViewInvoiceRefIdStyles = styled.div`
  ${BodyText} {
    margin-top: 7px;
  }
`;

export const ViewInvoiceRefSenderStyles = styled.div`
  text-align: right;
`;

export const InvoiceSectionStyles = styled.div`
  ${HeadingSAlt} {
    margin-top: 13px;
    margin-bottom: 7px;
  }
`;

export const GoBackStyles = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  ${HeadingS} {
    margin-left: 24px;
  }
`;

export const ViewInvoiceContainerStyles = styled.div`
  width: 100%;
  max-width: 800px;

  ${ViewInvoiceHeaderStyles} {
    margin-top: 30px;
  }

  ${ViewInvoiceBodyStyles} {
    margin-top: 24px;
  }

  ${InvoiceTableStyles} {
    margin-top: 40px;
  }

  ${ViewInvoiceBillingStyles} {
    margin-top: 40px;
  }

  ${BodyText} {
    color: ${({ theme }) => theme.colors.grayBlue};
  }
`;
