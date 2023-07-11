import { ReactComponent as Logo } from '../assets/logo.svg';
import avatar from '../assets/image-avatar.jpg';
import { SidebarStyles } from '../styles/components/Sidebar.styles';

export function Sidebar() {
    return (
        <SidebarStyles>
            <Logo />
            <img src={avatar} alt='profile image' />
        </SidebarStyles>
    )
}