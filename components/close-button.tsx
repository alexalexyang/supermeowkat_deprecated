import { CloseButton } from "../styles/buttons";
import { NextPage } from "next";

interface Props {
  ariaLabel?: string;
  onClick: () => void;
}

const Prompt: NextPage<Props> = ({ ariaLabel, onClick }: Props) => {
  return (
    <CloseButton aria-label={ariaLabel ?? "Close button"} onClick={onClick}>
      x
    </CloseButton>
  );
};

export default Prompt;
