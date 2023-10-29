// Import necessary modules from AWS Amplify and Amazon Cognito Identity SDK.
import { Auth } from "aws-amplify";
import { CognitoUser } from "amazon-cognito-identity-js";

// Define an asynchronous function named 'getUser' that returns a Promise.
// This function retrieves the current authenticated user.
export default async function getUser(): Promise<CognitoUser | null> {
  try {
    // Attempt to retrieve the currently authenticated user using the Auth module.
    const user = await Auth.currentAuthenticatedUser();

    // Log the retrieved user information for debugging and monitoring purposes.
    console.log(user);

    // Return the retrieved user object.
    return user;
  } catch (error) {
    // If an error occurs during the user retrieval process, catch and handle it.

    // Log the error for debugging and monitoring purposes.
    console.log(error);

    // Return null to indicate that no authenticated user was found or an error occurred.
    return null;
  }
}
