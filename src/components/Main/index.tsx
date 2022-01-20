import { Greeting } from "./Greeting";
import { HeroContent } from "./HeroContent";
import { Illustration } from "./Illustration";
import { MainContainer, MainContent } from "./styles";

export const Main = () => (
  <MainContainer>
    <div>
      <Greeting />
      <MainContent>
        <HeroContent />
        <Illustration />
      </MainContent>
    </div>
  </MainContainer>
);
