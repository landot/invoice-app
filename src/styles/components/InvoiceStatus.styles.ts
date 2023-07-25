import styled from "styled-components";
import { HeadingS } from "../header/HeadingS.styles";

export const Circle = styled.span<{ $type: "paid" | "pending" | "draft" }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ $type, theme }) =>
    ($type === "paid" && theme.colors.green) ||
    ($type === "pending" && theme.colors.orange) ||
    theme.colors.darkGray};
`;
export const StyledInvoice = styled.div<{
  $type: "paid" | "pending" | "draft";
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 40px;
  border-radius: 6px;

  background: ${({ $type, theme }) =>
    ($type === "paid" && theme.colors.greenWithOpacity) ||
    ($type === "pending" && theme.colors.orangeWithOpacity) ||
    theme.colors.darkGrayWithOpacity};

  ${Circle} {
    margin-right: 8px;
    background: ${({ $type, theme }) =>
      ($type === "paid" && theme.colors.green) ||
      ($type === "pending" && theme.colors.orange) ||
      theme.colors.darkGray};
  }

  ${HeadingS} {
    color: ${({ $type, theme }) =>
      ($type === "paid" && theme.colors.green) ||
      ($type === "pending" && theme.colors.orange) ||
      theme.colors.darkGray};
    text-transform: capitalize;
  }
`;
