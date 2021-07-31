import {
  PastVignettesSectionWrapper,
  StyledDetails,
} from "../../../styles/vignette/vignette-edit-page-styles";

import { NextPage } from "next";
import { UserVignetteProps } from "../../../types/vignette-types";

interface Props {
  entries: UserVignetteProps[];
}

const PastVignettes: NextPage<Props> = ({ entries }: Props) => {
  return (
    <PastVignettesSectionWrapper>
      <h2>Past vignettes</h2>

      {entries.map((item: UserVignetteProps) => (
        <StyledDetails key={item._id}>
          <summary>{item.title}</summary>
          <p>{item.body}</p>
        </StyledDetails>
      ))}
    </PastVignettesSectionWrapper>
  );
};

export default PastVignettes;
