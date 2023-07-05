import styled from "styled-components"
import { ReactComponent as Logo } from '../assets/logo.svg';
import avatar from '../assets/image-avatar.jpg';

export const SidebarStyles = styled.div`
    height: 100dvh;
    border-radius: 0px 20px 20px 0px;
    background: #373B53;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-bottom: 24px;
    }
`

export function Sidebar() {
    return (
        <SidebarStyles>
            <Logo />
            <img src={avatar} alt='profile image' />
        </SidebarStyles>
    )
}