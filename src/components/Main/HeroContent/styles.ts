import styled from "styled-components";

export const HeroContentContainer = styled.section`
  h1 {
    width: 600px;

    font-size: 80px;
    font-weight: 900;
    line-height: 88px;
    color: ${props => props.theme.colors.black};

    mark {
      color: ${props => props.theme.colors.purple};
      background: none;
    }
  }

  h2 {
    margin: 24px 0;
    width: 600px;
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    color: ${props => props.theme.colors.opaqueBlack};
  }

`;