import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Main from "../components/Main";
import { GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { initializeApollo } from "../lib/apolloClient";
import {GET_ARTICLES_PLACE, GET_ARTICLES_POSTING, GET_ARTICLES_SPECIAL_ORDER} from "../graphql";
import {Test} from "../components/Test";

interface IIndexProps {
  initialApolloState: {};
}
export default ({ initialApolloState }: IIndexProps) => {
  return (
    <>
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
    query: GET_ARTICLES_PLACE,
    variables : {limit : 3}
  });
  await apolloClient.query({
    query: GET_ARTICLES_SPECIAL_ORDER,
    variables : {limit : 2}
  });
  await apolloClient.query({
    query: GET_ARTICLES_POSTING,
    variables : {limit : 10}
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
