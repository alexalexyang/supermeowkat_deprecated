import { GenericButton } from "../../styles/buttons";
import { NextPage } from "next";
import { PasswordWrapper } from "../../styles/forms";
import Router from "next/router";
import fetch from "isomorphic-unfetch";
import { useState } from "react";

const ChangePassword: NextPage = () => {
  const [error, setError] = useState<string>();

  const handleClick = async () => {
    const { status, changePasswordLink } = await (
      await fetch("/api/user-profile/change-user-password")
    ).json();

    if (status === "success") {
      return Router.push(changePasswordLink);
    }
    return setError("No link");
  };

  return (
    <PasswordWrapper>
      <span>Password</span>
      <div>
        <GenericButton onClick={handleClick}>Change password</GenericButton>
      </div>
      {error && <p>{error}</p>}
    </PasswordWrapper>
  );
};

export default ChangePassword;
