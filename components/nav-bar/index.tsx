import MenuItems from "./menu-items";
import NavBarStyles from "../../styles/navbar-styles";
import { NextPage } from "next";
import React from "react";
import { menuItems } from "./menu-items-config";

const NavBar: NextPage = () => {
  return (
    <NavBarStyles.Bar>
      <MenuItems items={menuItems} />
    </NavBarStyles.Bar>
  );
};

export default NavBar;
