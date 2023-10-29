import { Auth } from "aws-amplify";
import { CognitoUser } from "amazon-cognito-identity-js";

export default async function getUser(): Promise<CognitoUser | null> {
  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
}
