import styled from "styled-components";
import Image from "next/image";

const StyledIcon = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin: 0 0.5rem;
`;

const Icon = (props: any) => {
  const { url, alt, children, styles } = props;

  return <StyledIcon src={url} width="12" height="12" alt="" />;
};

export default Icon;
