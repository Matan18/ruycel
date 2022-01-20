import styled from "styled-components";
import { Button } from "../../../Button";

export const CtaFooterContainer = styled.footer`
  display: flex;
`;

export const CtaButton = styled(Button)`
  & + & {
    margin-left: 24px;
  }

  width: 184px;
  height: 48px;
  border-radius: 8px;

  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
`;
