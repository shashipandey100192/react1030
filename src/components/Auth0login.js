import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton1 = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Login using Auth0</button>;
};

export default LoginButton1;