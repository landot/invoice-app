import styled from "styled-components";

export const LeftOverlayStyles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0, 0, 0, 0.5);
  mix-blend-mode: normal;
  z-index: 10;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-y: hidden;
  overflow-x: hidden;
`;

export const LeftOverlayContentStyles = styled.div`
  position: relative;
  height: 100dvh;
  width: 70%;
  min-width: 500px;
  max-width: 800px;
  border-radius: 6px;

  & > * {
    border-radius: inherit;
  }

  @media (max-width: 500px) {
    width: 100%;
    min-width: 300px;
  }
`;
