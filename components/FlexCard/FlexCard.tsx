import styled from "styled-components";
import { H1, H2, H3 } from "../typography/Typography";

const StyledCard = styled.section`
  background-color: #000;
`;

const FlexCard = () => {
  return (
    <StyledCard>
      <H1>Test</H1>
      <H2>Test</H2>
      <H3>Test</H3>
    </StyledCard>
  );
};

export default FlexCard;
