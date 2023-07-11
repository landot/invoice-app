import { ReactNode } from 'react';
import { LeftOverlayStyles, LeftOverlayContentStyles } from '../styles/components/LeftOverlay.styles';

export function LeftOverlay(props: {
    children: ReactNode,
    handleClose: () => void
}) {
    return (
        <LeftOverlayStyles onClick={props.handleClose} data-testid='left-overlay'>
            <LeftOverlayContentStyles onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                {props.children}
            </LeftOverlayContentStyles>
        </LeftOverlayStyles>
    )
}