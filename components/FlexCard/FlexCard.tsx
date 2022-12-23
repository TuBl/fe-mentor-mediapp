import styled from "styled-components";
import Image from "next/image";
import CardDetails from "../UI/CardDetails";
const StyledCard = styled.section`
  position: relative;
`;

const StyledBookmark = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #fff;
  border-radius: 50%;
  z-index: 1;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.5rem;
`;

type FlexCardProps = {
  title: string;
  year: string;
  type: string;
  rating: string;
  src: string;
};

const FlexCard = (props: FlexCardProps) => {
  const { title, year, type, rating, src } = props;
  return (
    <StyledCard>
      <StyledBookmark></StyledBookmark>
      <StyledImage src={src} width="560" height="348" alt="text"></StyledImage>
      <CardDetails
        title={title}
        year={year}
        type={type}
        rating={rating}
      ></CardDetails>
    </StyledCard>
  );
};

export default FlexCard;
