import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import styled from "styled-components";
import { SidebarStyles } from "../styles/components/Sidebar.styles";
import { PageStyles } from "../pages/Page";

export const LayoutStyles = styled.div`
    width: 100dvw;
    height: 100dvh;
    display: grid;
    grid-template-columns: 103px 1fr;
    grid-template-rows: 1fr;
    background: ${({ theme }) => theme.colors.lightGray};

    ${SidebarStyles} {
        position: sticky;
        top: 0;
    }

    ${PageStyles} {
        overflow: auto;
    }

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