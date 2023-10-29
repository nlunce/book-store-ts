import React, { useState, useEffect } from "react";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import "./App.css";
import { BrowseBooksUnauthenticated, BrowseBooksAuthenticated } from "./pages";

import getUser from "./authUtil";
import { CognitoUser } from "amazon-cognito-identity-js";

// Configure Amplify using AWS Amplify and your AWS service settings.
Amplify.configure(awsExports);

const App: React.FC = () => {
  // Initialize the component's state using the useState hook.
  const [user, setUser] = useState<CognitoUser | null>(null);

  // Use the useEffect hook to fetch the authentication status when the component mounts.
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch the authentication status using the getUser function.
        const fetchedUser = await getUser();
        // Update the user's state with the fetched authentication status.
        setUser(fetchedUser);
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
      }
    }

    // Trigger the fetchData function only when the component mounts (empty dependency array).
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
