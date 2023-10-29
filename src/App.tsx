import React, { useState, useEffect } from "react";
import { Amplify, Auth } from "aws-amplify";
import awsExports from "./aws-exports";
import "./App.css";
import { BrowseBooksUnauthenticated, BrowseBooksAuthenticated } from "./pages";

import getUser from "./authUtil";
import { CognitoUser } from "amazon-cognito-identity-js";

Amplify.configure(awsExports);

const App: React.FC = () => {
  const [user, setUser] = useState<CognitoUser | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedUser = await getUser();
        setUser(fetchedUser);
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {/* Render the BrowseBooksPage component if the user is not authenticated (user is null). */}
      {user === null && <BrowseBooksUnauthenticated />}

      {/* Render the BrowseBooksPageAuthenticated component if the user is authenticated (user is not null). */}
      {user !== null && <BrowseBooksAuthenticated />}
    </>
  );
};

export default App;
