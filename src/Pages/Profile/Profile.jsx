import React from "react";
import "./Profile.css";
import { useSelector } from "react-redux";

export const Profile = () => {
  const user = useSelector((state) => state.user);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="page profile">
      <p>
        <span>First Name</span>
        <i>{user.firstName}</i>
      </p>

      <p>
        <span>Last Name</span>
        <i>{user.lastName}</i>
      </p>

      <p>
        <span>Email</span>
        <i>{user.email}</i>
      </p>

      <button onClick={logout}>Logout</button>
    </div>
  );
};
