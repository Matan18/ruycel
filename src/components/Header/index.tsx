import { LoginButton } from "./LoginButton"
import { Logo } from "./Logo"
import { NavBar } from "./NavBar"
import { StyledHeader } from "./styles";

// named exports
export const Header = () => (
  <StyledHeader>
    <div>
      <Logo />
      <NavBar />
      <LoginButton />
    </div>
  </StyledHeader>
);
