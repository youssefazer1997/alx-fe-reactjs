import React, { useContext } from "react";
import { UserContext } from "./components/UserContext.js";

function UserDetails() {
  const { name, email } = useContext(UserContext);
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default UserDetails;
