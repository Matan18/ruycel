import styled, { keyframes } from "styled-components";

const waveAnimation = keyframes`
  0% { 
    --webkit-transform: rotate(0deg); 
    transform: rotate(0deg); 
  } 

  10% { 
    --webkit-transform: rotate(14deg); 
    transform: rotate(14deg); 
  } 

  20% { 
    --webkit-transform: rotate(-8deg); 
    transform: rotate(-8deg); 
  } 

  30% { 
    --webkit-transform: rotate(14deg); 
    transform: rotate(14deg); 
  } 

  40% { 
    --webkit-transform: rotate(-4deg); 
    transform: rotate(-4deg); 
  } 

  50% { 
    --webkit-transform: rotate(10deg); 
    transform: rotate(10deg); 
  } 

  60% { 
    --webkit-transform: rotate(0deg); 
    transform: rotate(0deg); 
  } 

  100% { 
    --webkit-transform: rotate(0deg); 
    transform: rotate(0deg); 
  }
`;

export const GreetingContainer = styled.div`
  display: flex;
  color: ${props => props.theme.colors.purple};
`;

export const Hand = styled.div`
  animation: ${waveAnimation} 2.5s ease-in-out infinite normal;
`;

export const GreetingText = styled.span`
  margin-left: 4px;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
`;
