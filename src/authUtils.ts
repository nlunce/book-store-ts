import { Auth } from "aws-amplify";

export async function checkAuthStatus() {
  try {
    const user = await Auth.currentAuthenticatedUser();

    return { isAuthenticated: true, isAuthenticating: false, user };
  } catch (error) {
    return { isAuthenticated: false, isAuthenticating: true, user: null };
  }
}
