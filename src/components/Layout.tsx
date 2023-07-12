import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import styled from "styled-components";

export const LayoutStyles = styled.div`
    width: 100dvw;
    height: 100dvh;
    display: grid;
    grid-template-columns: 103px 1fr;
    grid-template-rows: 1fr;
    background: #F8F8FB;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        grid-template-rows: 80px auto;
    };
`

export function Layout() {
    return (
        <LayoutStyles>
            <Sidebar />
            <Outlet />
        </LayoutStyles>
    )
}