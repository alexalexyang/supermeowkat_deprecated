import DashboardStyles from "../styles/dashboard-styles";
import Link from "next/link";
import { NextPage } from "next";
import { ReactNode } from "react";

interface DashboardItemProps {
  url: string;
  title: string;
  children: ReactNode;
}

const DashboardItem: NextPage<DashboardItemProps> = ({
  url,
  title,
  children,
}: DashboardItemProps) => {
  return (
    <DashboardStyles.LinkWrapper>
      <Link href={url}>
        <a href={url}>
          {children}
          <p>{title}</p>
        </a>
      </Link>
    </DashboardStyles.LinkWrapper>
  );
};

export default DashboardItem;
