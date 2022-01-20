import styled from "styled-components";

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  small {
    margin-left: 7px;
    font-size: 22px;
    font-weight: 800;
    line-height: 27px;
    letter-spacing: 0.05em;
    color: ${props => props.theme.colors.white};
  }
`;