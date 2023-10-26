import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

import "./App.css";

import { Navbar, BookActionCardCollection, Footer } from "./ui-components";

Amplify.configure(awsExports);

const App: React.FC = () => {
  return (
    <>
      <Navbar width={"100%"} />
      <BookActionCardCollection width={"100%"} />
      <Footer width={"100%"} />
    </>
  );
};

export default App;
