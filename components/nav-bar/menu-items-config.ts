export interface menuItem {
  title: string;
  url: string;
  auth: boolean;
}

export const menuItems: menuItem[] = [
  {
    title: "Home",
    url: "/",
    auth: false,
  },
  {
    title: "Most Liked Things",
    url: "/most-liked-things",
    auth: false,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    auth: true,
  },
  {
    title: "About",
    url: "/about",
    auth: false,
  },
  {
    title: "Login",
    url: "/api/auth/login",
    auth: false,
  },
  {
    title: "Logout",
    url: "/api/auth/logout",
    auth: true,
  },
];
