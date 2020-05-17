import React from "react";
import styled from "styled-components";
import { Normalize } from "styled-normalize";

import { Footer } from "../Footer";
import { GlobalStyles } from "../GlobalStyles";
import { Header } from "../Header";

interface LayoutProps {
  children?: React.ReactNode;
}

const Main = styled.main.attrs({
  role: "main",
})`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
`;

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <Normalize />
      <GlobalStyles />

      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
