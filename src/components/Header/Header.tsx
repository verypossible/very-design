import React from "react";
import styled from "styled-components";

import { Link } from "gatsby";
import { color, toRem } from "../../theme";

interface HeaderProps {
  children?: React.ReactNode;
}

const Layout = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${toRem(40)};
  margin-bottom: ${toRem(20)};
  padding: 0 ${toRem(40)};
  background-color: ${color.primary[10]};
  color: ${color.secondary[100]};
`;

const Header: React.FC<HeaderProps> = ({ children }: HeaderProps) => {
  return (
    <Layout>
      <h1>
        <Link to="/">Very Design</Link>
      </h1>

      {children}
    </Layout>
  );
};

export default Header;
