import styled from "styled-components";

export const MainContainer = styled.main`
  height: 100vh;
  background: ${props => props.theme.colors.white};
  display: grid;
  place-items: center;
  > div {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const MainContent = styled.div`
  display: flex;
`;
