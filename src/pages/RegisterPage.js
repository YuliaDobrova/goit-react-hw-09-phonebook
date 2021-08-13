import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import withNotification from "../hoc/withNotification";

const RegisterPage = () => {
  return (
    <>
      <h2>Go through a simple registration</h2>
      <RegisterForm />
    </>
  );
};

export default withNotification(RegisterPage);
