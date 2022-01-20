import { GreetingContainer, GreetingText, Hand } from "./styles";

export const Greeting = () => (
  <GreetingContainer>
    <Hand>👋</Hand>
    <GreetingText>
      <strong>Olá, </strong>
      que bom tê-lo aqui!
    </GreetingText>
  </GreetingContainer>
);
