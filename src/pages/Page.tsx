import { ReactNode } from "react";
import { PageContentStyles, PageStyles } from "../styles/pages/Page.styles";

export function Page(props: {children: ReactNode}) {
    return (
        <PageStyles>
            <PageContentStyles>
                {props.children}
            </PageContentStyles>
        </PageStyles>
    )
}