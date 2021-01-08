import Home from "../../styles/icons/heart-outline-icon";
import Login from "../../styles/icons/login-icon";
import Logout from "../../styles/icons/logout-icon";
import NavBarStyles from "../../styles/navbar-styles";
import { NextPage } from "next";
import React from "react";
import SettingsAndProfile from "../../styles/icons/person-outline-icon";
import StarOutline from "../../styles/icons/star-outline-icon";
import dynamic from "next/dynamic";
import { menuItem } from "./menu-items-config";
import { menuItemStyles } from "../../styles/style-constants";
import { useGetUserProfile } from "../../utils/user-profile";

const NextLink = dynamic(() => import("next/link"));

interface Props {
  items: menuItem[];
}

const MenuItems: NextPage<Props> = ({ items }: Props) => {
  const { data: profile } = useGetUserProfile();

  if (typeof window === "undefined") {
    return null;
  }

  const host = window.location.host;
  const pathname = window.location.pathname;

  return (
    <>
      {items.map((item) => {
        if (!host.includes("localhost") && item.title === "Login") {
          return null;
        }

        if (item.title === "Home")
          return (
            <NextLink href={item.url} key={item.url}>
              <a href={item.url} key={item.url}>
                <NavBarStyles.MenuItemWrapper>
                  <Home
                    color={
                      pathname === "/"
                        ? menuItemStyles.home
                        : menuItemStyles.disabled
                    }
                    alt={item.title}
                  />
                </NavBarStyles.MenuItemWrapper>
              </a>
            </NextLink>
          );

        if (item.title === "Login") {
          return profile ? null : (
            <NextLink href={item.url} key={item.url}>
              <a href={item.url} key={item.url}>
                <NavBarStyles.MenuItemWrapper>
                  <Login alt={item.title} />
                </NavBarStyles.MenuItemWrapper>
              </a>
            </NextLink>
          );
        }

        if (item.title === "Logout") {
          return (
            profile && (
              <NextLink href={item.url} key={item.url}>
                <a href={item.url} key={item.url}>
                  <NavBarStyles.MenuItemWrapper>
                    <Logout alt={item.title} />
                  </NavBarStyles.MenuItemWrapper>
                </a>
              </NextLink>
            )
          );
        }

        if (item.title === "Most Liked Things")
          return (
            <NextLink href={item.url} key={item.url}>
              <a href={item.url} key={item.url}>
                <NavBarStyles.MenuItemWrapper>
                  <StarOutline
                    alt={item.title}
                    color={
                      pathname.includes(item.url)
                        ? undefined
                        : menuItemStyles.disabled
                    }
                  />
                </NavBarStyles.MenuItemWrapper>
              </a>
            </NextLink>
          );

        if (item.title === "About")
          return profile ? null : (
            <NextLink href={item.url} key={item.url}>
              <a href={item.url} key={item.url}>
                <NavBarStyles.MenuItemWrapper>
                  <SettingsAndProfile
                    alt={item.title}
                    color={
                      pathname.includes(item.url)
                        ? undefined
                        : menuItemStyles.disabled
                    }
                  />
                </NavBarStyles.MenuItemWrapper>
              </a>
            </NextLink>
          );

        if (item.title === "Dashboard") {
          return (
            profile && (
              <NextLink href={item.url} key={item.url}>
                <a href={item.url} key={item.url}>
                  <NavBarStyles.MenuItemWrapper>
                    <SettingsAndProfile
                      alt={item.title}
                      color={
                        pathname.includes(item.url)
                          ? undefined
                          : menuItemStyles.disabled
                      }
                    />
                  </NavBarStyles.MenuItemWrapper>
                </a>
              </NextLink>
            )
          );
        }
      })}
    </>
  );
};

export default MenuItems;
