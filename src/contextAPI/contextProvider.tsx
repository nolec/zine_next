import React, { useEffect, useState } from "react";
import Context from "./context";
import { useQuery } from "@apollo/react-hooks";
import { GET_ARTICLE, GET_ARTICLES } from "../graphql";
import { NextRouter, useRouter } from "next/router";

const ContextProvider: React.FC = ({ children }) => {
  const { data: articlesData, loading: articlesLoading } = useQuery(
    GET_ARTICLES
  );
  const [top, setTop] = useState("");
  const topHandle = (y: number) => {
    if (y >= 0 && y < 61) {
      setTop(`${60 - y}px`);
    } else if (y > 59) {
      setTop(`${0}px`);
    }
  };

  const provider = { articlesData, articlesLoading, top, topHandle };

  return <Context.Provider value={provider}>{children}</Context.Provider>;
};

export default ContextProvider;
