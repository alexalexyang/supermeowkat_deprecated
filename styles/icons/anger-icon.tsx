import { IconProps } from "../../types/types";
import { NextPage } from "next";

// From freepik, flatiron

const Anger: NextPage<IconProps> = ({ className, alt }: IconProps) => (
  <svg
    viewBox="8.5 0 15 32"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <title>{alt ?? "angry"}</title>
    <path
      d="m16 8c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm1.556 3.973 1.667-1.111c.229-.153.54-.091.693.139s.091.54-.139.693l-1.667 1.111c-.085.057-.182.084-.277.084-.161 0-.32-.078-.416-.223-.153-.229-.091-.54.139-.693zm-5.472-.973c.154-.229.464-.292.693-.139l1.667 1.111c.23.153.292.464.139.693-.096.145-.255.223-.416.223-.095 0-.192-.027-.277-.084l-1.667-1.111c-.23-.153-.292-.463-.139-.693zm.583 5c-.735 0-1.333-.598-1.333-1.333s.598-1.333 1.333-1.333 1.333.597 1.333 1.333-.598 1.333-1.333 1.333zm3.333 5.967c-1.103 0-2-1.032-2-2.3s.897-2.3 2-2.3 2 1.032 2 2.3-.897 2.3-2 2.3zm3.333-5.967c-.735 0-1.333-.598-1.333-1.333s.598-1.333 1.333-1.333 1.333.598 1.333 1.333-.597 1.333-1.333 1.333z"
      fill="#fc573b"
    />
  </svg>
);

export default Anger;
