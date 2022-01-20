import styled, { css } from "styled-components";

type CtaButtonProps = {
  colorType?: 'purple' | 'green';
};

export const Button = styled.button<CtaButtonProps>`
  position: relative;
  transition: all .4s;
  letter-spacing: 0.05em;

  &:hover {
    filter: brightness(.8);
  }

  &:active {
    top: 1px;
  }

  ${props => props.colorType === 'purple' ?
    css`
    background-color: ${props.theme.colors.purple};
    color: ${props.theme.colors.white};
    `
    :
    css`
    background-color: ${props.theme.colors.greenBackground};
    color: ${props.theme.colors.greenText}
    `
  }
`;
