import { menuItemStyles, navBarStyles } from "./style-constants";

import styled from "styled-components";

const Bar = styled.nav`
  height: ${navBarStyles.height};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${navBarStyles.backgroundColor};
  border-bottom: 1px solid ${navBarStyles.borderColor};

  :hover {
    background-color: papayawhip;
  }
`;

const MenuItemWrapper = styled.div`
  display: flex;
  align-items: center;

  > * {
    height: ${menuItemStyles.size};
    width: ${menuItemStyles.size};
  }

  :hover {
    svg {
      path {
        fill: ${menuItemStyles.hoverColor1};
      }
    }
  }
`;

const NavBarStyles = {
  Bar,
  MenuItemWrapper,
};

export default NavBarStyles;
