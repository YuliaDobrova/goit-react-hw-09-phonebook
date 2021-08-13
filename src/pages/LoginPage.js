import React from "react";
import LoginForm from "../components/auth/LoginForm";
import withNotification from "../hoc/withNotification";

const LoginPage = () => {
  return (
    <>
      <h2>Login, please</h2>
      <LoginForm />
    </>
  );
};

export default withNotification(LoginPage);
