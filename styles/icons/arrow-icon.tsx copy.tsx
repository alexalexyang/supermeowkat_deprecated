import styled, { css } from "styled-components";

import { IconProps } from "../../types/types";
import { NextPage } from "next";
import { dashboardStyles } from "../style-constants";

interface ArrowIconProps extends IconProps {
  position: string;
}

const ArrowIcon: NextPage<ArrowIconProps> = ({
  className,
  color,
  alt,
  position,
}: ArrowIconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="chevron-up"
    className={className}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <title>{alt ?? `arrow ${position}`}</title>
    <path
      fill={color ? color : dashboardStyles.profileIconColor}
      d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
    ></path>
  </svg>
);

const getPosition = (position: string) => {
  switch (position) {
    case "left":
      return "270deg";
    case "right":
      return "90deg";
    case "down":
      return "180deg";
    default:
      return;
  }
};

const StyledArrowIcon = styled(ArrowIcon)<{ position: string }>`
  ${({ position }) =>
    css`
      transform: rotate(${getPosition(position)});
    `}

  :hover {
    path {
      fill: fuchsia;
    }
  }
`;

export default StyledArrowIcon;
