import { useState } from "react";

function searchUser() {
  const [userName, setUserName] = useState("");

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted !");
  };

  return (
    <div style={{ padding: "20px" }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="search"
          placeholder="User Name"
          name="userName"
          value={userName}
          onChange={handleChange}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default searchUser;
