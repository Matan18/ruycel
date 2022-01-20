import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1;
  
  padding: 0 16px;
  height: 64px;
  display: flex;
  align-items: center;

  background: ${props => props.theme.colors.black};

  > div {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 1120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;