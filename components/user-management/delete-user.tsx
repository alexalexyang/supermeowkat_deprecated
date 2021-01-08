import { GenericButton } from "../../styles/buttons";
import { NextPage } from "next";
import { StyledWarning } from "../../styles/misc-styles";
import fetch from "isomorphic-unfetch";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";

const ConfirmDiv = styled.div`
  button {
    margin-right: 1rem;
    height: 2rem;
    width: 3rem;
  }
`;

const DeleteUser: NextPage = () => {
  const router = useRouter();

  const [deleteError, setDeleteError] = useState(false);
  const [confirmPanel, setConfirmPanel] = useState(false);

  const deleteUser = async () => {
    let response = await fetch("/api/auth/delete-user-from-auth0");
    const { success } = await response.json();

    if (success === true) return router.push("/");
    setDeleteError(!success);
  };

  return (
    <>
      <h4>Delete my account</h4>
      {!confirmPanel && (
        <GenericButton onClick={() => setConfirmPanel(true)}>
          Delete my account
        </GenericButton>
      )}
      {confirmPanel && (
        <ConfirmDiv>
          <GenericButton onClick={deleteUser}>Yes</GenericButton>
          <GenericButton onClick={() => setConfirmPanel(false)}>
            No
          </GenericButton>
        </ConfirmDiv>
      )}
      <StyledWarning>This is irreversible.</StyledWarning>
      {deleteError && (
        <StyledWarning>
          Something didn&apos;t quite work out. We&apos;d appreciate it if you
          let us know. Thank you.
        </StyledWarning>
      )}
    </>
  );
};

export default DeleteUser;
