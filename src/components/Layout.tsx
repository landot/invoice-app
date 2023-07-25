import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { LayoutStyles } from "./Layout.styles";

export function Layout() {
    return (
        <LayoutStyles>
            <Sidebar />
            <Outlet />
        </LayoutStyles>
    )
}