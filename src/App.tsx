import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

import "./App.css";

import { BrowseBooksUnauthenticated } from "./pages";

Amplify.configure(awsExports);

const App: React.FC = () => {
  return (
    <>
      <BrowseBooksUnauthenticated />
    </>
  );
};

export default App;
