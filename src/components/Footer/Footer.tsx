import React from "react";
import styled from "styled-components";

const Layout = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const Footer: React.FC = () => {
  return (
    <Layout>
      © {new Date().getFullYear()}, Built by
      {` `}
      <a href="https://www.verypossible.com">Very</a>
    </Layout>
  );
};

export default Footer;
