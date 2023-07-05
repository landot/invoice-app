import { ReactNode } from 'react';
import styled from "styled-components"

export const LeftOverlayStyles = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(0, 0, 0, .5);
    mix-blend-mode: normal;
    z-index: 10;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
`

export const LeftOverlayContentStyles = styled.div`
    position: relative;
    overflow-y: auto;
    height: 100dvh;
    width: 50%;
    border-radius: 6px;

    & > * {
        border-radius: inherit;
    }
`

export function LeftOverlay(props: {
    children: ReactNode,
    handleClose: () => void
}) {
    return (
        <LeftOverlayStyles onClick={() => props.handleClose()}>
            <LeftOverlayContentStyles onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                {props.children}
            </LeftOverlayContentStyles>
        </LeftOverlayStyles>
    )
}