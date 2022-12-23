import styled from "styled-components";

enum SIZE {
  "full-width" = "100%",
  "small" = "25%",
  "medium" = "50%",
  "large" = "75%",
}

type ContainerProps = {
  size?: "full-width" | "small" | "medium" | "large";
  children: React.ReactNode;
  styles?: React.CSSProperties;
};

const StyledContainer = styled.div.attrs((props: ContainerProps) => props)`
  width: ${(props) => SIZE[props.size || "full-width"]};
  ${(props) => ({ ...props.styles })}
`;

const Container = (props: ContainerProps) => {
  const { size, children, styles } = props;
  return (
    <StyledContainer size={size} styles={styles}>
      {children}
    </StyledContainer>
  );
};

export default Container;
