import { StateProps, SwipeFuncProps } from "../../../types/types";

import CrossIcon from "../../../styles/icons/cross-icon";
import HeartIcon from "../../../styles/icons/heart-solid-icon";
import { RoundButton } from "../../../styles/buttons";
import { SingleButtonWrapper } from "../../../styles/main-page-styles";

const YesNoButtons = <T extends object>({
  set,
  setSet,
  noFunc,
  yesFunc,
}: StateProps<T> & SwipeFuncProps) => {
  const isTouchScreen = navigator.maxTouchPoints > 0;

  return (
    <>
      <SingleButtonWrapper>
        <RoundButton
          onClick={() => noFunc(set, setSet)}
          isTouchScreen={isTouchScreen}
        >
          <CrossIcon />
        </RoundButton>
      </SingleButtonWrapper>
      <SingleButtonWrapper>
        <RoundButton
          onClick={() => yesFunc(set, setSet)}
          isTouchScreen={isTouchScreen}
        >
          <HeartIcon />
        </RoundButton>
      </SingleButtonWrapper>
    </>
  );
};

export default YesNoButtons;
