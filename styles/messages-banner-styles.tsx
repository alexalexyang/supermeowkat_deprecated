import { layoutStyles } from "./style-constants";
import styled from "styled-components";

export const BannerP = styled.p`
  animation: fadeIn ease 2s;

  a {
    color: ${layoutStyles.color};
  }

  :hover {
    a {
      color: ${layoutStyles.hoverColor};
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
