import {
  PastVignettesSectionWrapper,
  StyledDetails,
} from "../../../styles/page-styles/vignette-edit-page-styles";

import { NextPage } from "next";
import { VignetteEntryProps } from "../../../types/types";

interface Props {
  entries: VignetteEntryProps[];
}

const PastVignettes: NextPage<Props> = ({ entries }: Props) => {
  return (
    <PastVignettesSectionWrapper>
      <h2>Past vignettes</h2>

      {entries.map((item: any) => (
        <StyledDetails key={item.entryId}>
          <summary>{item.title}</summary>
          <p>{item.body}</p>
        </StyledDetails>
      ))}
    </PastVignettesSectionWrapper>
  );
};

export default PastVignettes;
