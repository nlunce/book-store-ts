import React, { useState, useEffect } from "react";
import { checkAuthStatus } from "./authUtils";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

import "./App.css";

import { BrowseBooksUnauthenticated } from "./pages";

Amplify.configure(awsExports);

const App: React.FC = () => {
  const [state, setState] = useState({
    isAuthenticated: false,
    isAuthenticating: true,
    user: null,
  });

  useEffect(() => {
    async function fetchAuthStatus() {
      const authStatus = await checkAuthStatus();
      setState(authStatus);
    }
    fetchAuthStatus();
  }, []);

  return (
    <>
      <BrowseBooksUnauthenticated />
    </>
  );
};

export default App;
