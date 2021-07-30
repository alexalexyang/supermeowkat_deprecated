import {
  PastVignettesSectionWrapper,
  StyledDetails,
} from "../../../styles/page-styles/vignette-edit-page-styles";

import { NextPage } from "next";
import { VignetteUserEntryProps } from "../../../types/types";

interface Props {
  entries: VignetteUserEntryProps[];
}

const PastVignettes: NextPage<Props> = ({ entries }: Props) => {
  return (
    <PastVignettesSectionWrapper>
      <h2>Past vignettes</h2>

      {entries.map((item: VignetteUserEntryProps) => (
        <StyledDetails key={item._id}>
          <summary>{item.title}</summary>
          <p>{item.body}</p>
        </StyledDetails>
      ))}
    </PastVignettesSectionWrapper>
  );
};

export default PastVignettes;
