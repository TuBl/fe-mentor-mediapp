import styled from "styled-components";
import Spacer from "../typography/Spacer";
import { H2 } from "../typography/Typography";
import Container from "./Container";
import Icon from "./Icon";

type CardDetailsProps = {
  year: string;
  type: string;
  rating: string;
  title: string;
  spacer?: "dot" | "pipe" | "dash" | "space";
  direction?: "vertical" | "horizontal";
  styles?: Record<string, string>;
};

const StyledCardDetails = styled.article.attrs(
  (props: CardDetailsProps) => props
)`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "vertical" ? "column" : "row"};
  justify-content: center;
  align-items: center;
  width: fit-content;
  opacity: 0.8;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SpanWithIcon = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const CardDetails = (props: CardDetailsProps) => {
  const { title, year, type, rating, direction, spacer, styles } = props;
  return (
    <Container
      size="full-width"
      styles={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <StyledCardDetails>
        <span>{year}</span>
        <Spacer
          type={spacer ?? "dot"}
          direction={direction}
          size="medium"
        ></Spacer>
        <SpanWithIcon>
          <Icon url="/icons/icon-nav-movies.svg"></Icon>
          {type}
        </SpanWithIcon>
        <Spacer
          type={spacer ?? "dot"}
          direction={direction}
          size="medium"
        ></Spacer>
        <span>{rating}</span>
      </StyledCardDetails>
      <StyledTitleContainer>
        <H2>{title}</H2>
      </StyledTitleContainer>
    </Container>
  );
};

export default CardDetails;
