import { useState } from 'react';
import { IndicatorBar, NavBarContainer, NavItem } from './styles';

export const NavBar = () => {
  const [active, setActive] = useState(0);
  return (
    <NavBarContainer>
      <ul>
        <NavItem isActive={active === 0} >
          <a
            onClick={() => setActive(0)}
            href="#"
          >Home</a>
        </NavItem>
        <NavItem isActive={active === 1} >
          <a
            onClick={() => setActive(1)}
            href="#"
          >Serviços</a>
        </NavItem>
        <NavItem isActive={active === 2} >
          <a
            onClick={() => setActive(2)}
            href="#"
          >Sobre</a>
        </NavItem>
        <NavItem isActive={active === 3} >
          <a
            onClick={() => setActive(3)}
            href="#"
          >Contato</a>
        </NavItem>
        <IndicatorBar index={active} />
      </ul>
    </NavBarContainer>
  );
};
