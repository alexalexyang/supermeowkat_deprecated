import DropdownStyles from "../../styles/dropdown-styles";
import { GenericButton } from "../../styles/buttons";
import Link from "next/link";
import { NextPage } from "next";
import { useState } from "react";

const Dropdown: NextPage = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DropdownStyles.DropdownWrapper>
      <GenericButton onClick={() => setOpen(!open)}>Match by...</GenericButton>
      {open && (
        <DropdownStyles.DropdownMenu>
          <Link href="/vignettes">Vignettes</Link>
          <Link href="/">Movies</Link>
        </DropdownStyles.DropdownMenu>
      )}
    </DropdownStyles.DropdownWrapper>
  );
};

export default Dropdown;
