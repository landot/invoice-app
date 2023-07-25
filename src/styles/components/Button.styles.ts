import styled from "styled-components";
import { ButtonType } from "../../components/Button";

export const AddIconStyles = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonStyles = styled.button<{ $styles: ButtonType }>`
  cursor: inherit;
  border: none;
  background: inherit;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-size: ${({ theme }) => theme.lineHeight.extraSmall};
  color: ${(p) => p.$styles.textColor};
`;

export const ButtonContainerStyles = styled.div<{ $styles: ButtonType }>`
  width: ${(p) => p.$styles.width};
  cursor: pointer;
  padding: ${(p) =>
    p.$styles.includeAddIcon ? "8px 17px 8px 8px" : "18px 24px 15px 24px"};
  border-radius: 24px;
  display: flex;
  justify-content: ${(p) =>
    p.$styles.width === "100%" ? "center" : "space-between"};
  align-items: center;
  background: ${(p) => p.$styles.backgroundColor};

  ${AddIconStyles} {
    margin-right: 16px;
  }

  &:hover {
    background: ${(p) => p.$styles.hoverBackgroundColor};

    ${ButtonStyles} {
      color: ${(p) => p.$styles.hoverTextColor};
    }
  }

  @media (max-width: 500px) {
    ${AddIconStyles} {
      margin-right: 8px;
    }
  }
`;
