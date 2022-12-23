import styled from "styled-components";
import { colors } from "../../styles/colors";

type SpacerTpyes = {
  size?: "small" | "medium" | "large";
  direction?: "horizontal" | "vertical";
  type: "dot" | "pipe" | "dash" | "space";
  styles?: Record<string, string>;
};

enum PADDING {
  "small-horizontal" = "0 0.25rem",
  "medium-horizontal" = "0 0.5rem",
  "large-horizontal" = "0 1rem",
  "small-vertical" = "0.25rem 0",
  "medium-vertical" = "0.5rem 0",
  "large-vertical" = "1rem 0",
}

const StyledSpacer = styled.span.attrs((props: SpacerTpyes) => props)`
  position: relative;
  display: inline-block;
  padding: ${(props) =>
    // @ts-ignore
    PADDING[`${props.size}-${props.direction}` || "small-horizontal"]};
  color: ${colors.white};
  ::before {
    content: ${(props) =>
      props.type === "dot"
        ? "'•'"
        : props.type === "pipe"
        ? "'|'"
        : props.type === "dash"
        ? "'-'"
        : "' '"};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  ${(props) => ({ ...props.styles })}
`;

const Spacer = (props: SpacerTpyes) => {
  const {
    size = "small",
    type = "dot",
    direction = "horizontal",
    styles,
  } = props;
  return (
    <StyledSpacer
      size={size}
      type={type}
      direction={direction}
      styles={styles}
    ></StyledSpacer>
  );
};

export default Spacer;
