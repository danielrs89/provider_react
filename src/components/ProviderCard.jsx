import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import edit from "../assets/img/icons/edit.png";
import deleteIMG from "../assets/img/icons/delete.png";
import mail from "../assets/img/icons/mail.png";
import wasap from "../assets/img/icons/wasap.png";
import { ProviderContext } from "../contexts/provider.context";

function ProviderCard(Props) {
  // variables
  const { deleteProvider, isCreate, setIsCreate } = useContext(ProviderContext);
  const { provider } = Props;

  


  

  

  return (
    <>
      
    </>
  );
}
// Memoización: evita re-renderizados innecesarios si las props no cambian.
export default React.memo(ProviderCard);
