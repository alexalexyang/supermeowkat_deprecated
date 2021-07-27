import Dropdown from "./dropdown";
import MenuItems from "./menu-items";
import NavBarStyles from "../../styles/navbar-styles";
import { NextPage } from "next";
import React from "react";
import { menuItems } from "./menu-items-config";
import { useGetUserProfile } from "../../utils/user-profile";

const NavBar: NextPage = () => {
  const { data: profile } = useGetUserProfile();

  return (
    <NavBarStyles.Bar>
      {profile && <Dropdown />}

      <MenuItems items={menuItems} />
    </NavBarStyles.Bar>
  );
};

export default NavBar;
