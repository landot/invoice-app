import { ReactNode } from "react";
import styled from "styled-components";

export const PageStyles = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const PageContentStyles = styled.div`
    width: 100%;
    height: 100%;
    max-width: 800px;
    padding: 78px 20px;
    display: flex;
    flex-direction: column;
`


export function Page(props: {children: ReactNode}) {
    return (
        <PageStyles>
            <PageContentStyles>
                {props.children}
            </PageContentStyles>
        </PageStyles>
    )
}