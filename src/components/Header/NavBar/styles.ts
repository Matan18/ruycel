import styled, { css } from "styled-components";

export const NavBarContainer = styled.nav`
  height: 100%;
  
  ul {
    height: 100%;
    display: flex;
    position: relative;
    align-items: stretch;
  }
  `;

type NavItemProps = {
  isActive?: boolean;
}

export const NavItem = styled.li<NavItemProps>`
  & + & {
    margin-left: 16px;
  }

  a {
    width: 65px;
    height: 100%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
  }

  ${props => props.isActive && css`
    a {
      
      font-weight: 600;
      color: ${props => props.theme.colors.white};
    }
    a::after {
      left: 50%;
      bottom: 0;
      content: ' ';
      position: absolute;
      transform: translateX(-50%);
      
      width: 120%;
      height: 4px;
      border-radius: 4px 4px 0 0;
    }
  `}
`;

type IndicatorBar = {
  index: number;
};

export const IndicatorBar = styled.span<IndicatorBar>`
  transition: left .5s;
  left: ${props => props.index * (65 + 15)}px;
  bottom: 0;
  content: ' ';
  position: absolute;
  transform: translateX(-0px) translateY(0);
  
  width: 72px;
  height: 4px;
  border-radius: 4px 4px 0 0;
  background: ${props => props.theme.colors.purple};
`;
