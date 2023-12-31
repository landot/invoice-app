import { ReactNode } from "react";
import {
  CenterOverlayStyles,
  CenterOverlayContentStyles,
} from "../styles/components/CenterOverlay.styles";

export function CenterOverlay(props: {
  children: ReactNode;
  handleClose: () => void;
}) {
  return (
    <CenterOverlayStyles
      onClick={props.handleClose}
      data-testid="center-overlay"
    >
      <CenterOverlayContentStyles
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        {props.children}
      </CenterOverlayContentStyles>
    </CenterOverlayStyles>
  );
}
