import { ReactComponent as Logo } from "../assets/logo.svg";
import avatar from "../assets/image-avatar.jpg";
import { SidebarStyles } from "../styles/components/Sidebar.styles";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
  const navigate = useNavigate();

  return (
    <SidebarStyles>
      <Logo onClick={() => navigate("/")} data-testid='logo' />
      <img src={avatar} alt="profile image" data-testid='profile' />
    </SidebarStyles>
  );
}
