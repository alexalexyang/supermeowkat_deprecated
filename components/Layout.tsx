import LayoutStyles from "../styles/layout-styles";
import Navbar from "./nav-bar";
import { NextPage } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout: NextPage<Props> = ({ children }: Props) => {
  return (
    <>
      <LayoutStyles.GlobalStyle />
      <Navbar />
      <LayoutStyles.Children>{children!}</LayoutStyles.Children>
    </>
  );
};

export default Layout;
