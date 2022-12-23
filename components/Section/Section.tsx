//useSWR allows the use of SWR inside function components
import { useMemo } from "react";
import useSWR from "swr";
import { AllowedQueries } from "../../types/RequestTypes";
import FlexCard from "../FlexCard/FlexCard";
import Container from "../UI/Container";

type SectionProps = {
  query: AllowedQueries;
};
//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Section = (props: SectionProps) => {
  const { query } = props;
  const { data, error } = useSWR(`/api/staticdata?qs=${query}`, fetcher);

  console.log(query);
  const jsonData = useMemo(() => {
    if (data) {
      return JSON.parse(data);
    }
    return [];
  }, [data]);
  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;
  const { title, year, type, rating, url } = jsonData.data;

  return (
    <Container size="small">
      <FlexCard
        title={title}
        year={year}
        type={type}
        rating={rating}
        src={url}
      ></FlexCard>
    </Container>
  );
};

export default Section;
