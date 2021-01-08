import { ContentProps, StateProps } from "../../types/types";

export const yesFunc = async (
  set: StateProps<ContentProps[]>["set"],
  setSet: StateProps<ContentProps[]>["setSet"]
) => {
  if (!set.data || !set.data.length) {
    return;
  }

  setTimeout(() => {
    const currentSet = set.data && set.data.pop();

    currentSet &&
      fetch(
        `/api/content/likes?movie_id=${currentSet.id}&movie_title=${currentSet.title}`
      );

    setSet({ ...set });
  }, 300);
};

export const noFunc = async (
  set: StateProps<ContentProps[]>["set"],
  setSet: StateProps<ContentProps[]>["setSet"]
) => {
  // console.log("set", set.data);
  if (!set.data || !set.data.length) {
    // console.log("no set", set);
    return;
  }

  setTimeout(() => {
    set.data && set.data.pop();
    setSet({ ...set });
  }, 250);
};
