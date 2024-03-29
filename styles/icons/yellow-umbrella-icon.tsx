import { IconProps } from "../../types/types";
import { NextPage } from "next";

// From freepik, flatiron

const YellowUmbrella: NextPage<IconProps> = ({ className, alt }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{alt ?? "umbrella"}</title>
    <path
      d="m64 14.24a1.75 1.75 0 0 1 -1.75-1.75v-5.99a1.75 1.75 0 0 1 3.5 0v5.99a1.75 1.75 0 0 1 -1.75 1.75z"
      fill="#e7e6e4"
    />
    <path
      d="m64 99.94a1.75 1.75 0 0 1 -1.75-1.75v-42.53a1.75 1.75 0 0 1 3.5 0v42.53a1.75 1.75 0 0 1 -1.75 1.75z"
      fill="#e7e6e4"
    />
    <path
      d="m112.615 63.49c-5.64-6.33-19.02-7.67-22.12 0-6.34-6.67-22.41-7.5-26.49 5.99-4.09-13.49-20.15-12.66-26.5-5.99-3.1-7.67-16.48-6.33-22.12 0-.808-18.748 11.076-46.739 44.493-50.755a34.588 34.588 0 0 1 8.254 0c33.408 4.016 45.3 32.007 44.483 50.755z"
      fill="#ffc043"
    />
    <path
      d="m59.88 12.74a35.581 35.581 0 0 1 4.12-.25s-27.12 15.51-26.5 51c-3.1-7.67-16.48-6.33-22.12 0-.8-18.75 11.08-46.74 44.5-50.75z"
      fill="#f4ad31"
    />
    <path
      d="m90.5 63.47c0 .01-.01.01-.01.02-6.34-6.67-22.41-7.5-26.49 5.99v-56.99s27.11 15.5 26.5 50.98z"
      fill="#f4ad31"
    />
    <path
      d="m67 98.19v10.64a12.665 12.665 0 1 1 -25.33 0v-4.6h6v4.6a6.665 6.665 0 1 0 13.33 0v-10.64z"
      fill="#c9c8c6"
    />
  </svg>
);

export default YellowUmbrella;
