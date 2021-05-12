import React, { useState } from "react";

const useUser = () => {
  const [nickname, setNickname] = useState("");
  const [isAdmin, setBeAdmin] = useState(false);
  const updateNickname = (event) => {
    setNickname(event.target.value);
  };

  return [nickname, isAdmin, updateNickname];
};

const User = () => {
  const [nickname, isAdmin, setNickname] = useUser();

  return (
    <div>
      <label>{nickname}</label>
      <label>{isAdmin ? "ADMIN" : "USER"}</label>
      <input value={nickname} onChange={setNickname} />
    </div>
  );
};

export default User;
