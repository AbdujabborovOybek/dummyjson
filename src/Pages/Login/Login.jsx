import React from "react";
import "./Login.css";
import { useSigninMutation } from "../../Context/api/userApi";
import { enqueueSnackbar } from "notistack";

export const Login = () => {
  const [signin] = useSigninMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = Object.fromEntries(formData);
    const { data = null, error = null } = await signin(value);
    if (error) return enqueueSnackbar(error.data.message, { variant: "error" });
    enqueueSnackbar("Welcome back! ", { variant: "success" });
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data));
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h3>
          <span>Sign In</span>
          <a
            href="http://dummyjson.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.dummyjson.com
          </a>
        </h3>
        <label>
          <span>Username</span>
          <input
            type="text"
            name="username"
            placeholder="Username"
            defaultValue="kminchelle"
            autoComplete="off"
            autoCapitalize="off"
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            defaultValue="0lelplR"
          />
        </label>

        <label>
          <input type="submit" value="Sign In" />
        </label>
      </form>
    </div>
  );
};
