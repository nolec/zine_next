import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Main from "../components/Main";
import { GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { initializeApollo } from "../lib/apolloClient";
import { GET_ARTICLES } from "../graphql";

interface IIndexProps {
  initialApolloState: {};
}
export default ({ initialApolloState }: IIndexProps) => {
  return (
    <>
      <Banner container={{ height: "60px" }} title="탑 배너" />
      <Header />
      <Main />
    </>
  );
};
export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<ParsedUrlQuery>
) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_ARTICLES,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
