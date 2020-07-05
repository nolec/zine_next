import React, { PropsWithChildren } from "react";
import { NextComponentType } from "next";
import styled from "styled-components";

const Container = styled.div``;

interface ILayoutProps {
  children: PropsWithChildren<Element>;
}

const Layout: NextComponentType<ILayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
