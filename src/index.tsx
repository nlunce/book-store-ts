// Import required modules from React, React DOM, and other libraries.
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import components and styles for theming and UI.
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";

// Configure AWS Amplify with the provided AWS settings.
Amplify.configure(awsconfig);

// Create a root element in the DOM to render the React application.
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Render the React application inside the root element.
root.render(
  // Wrap the main application component in React Strict Mode for enhanced development checks.
  <React.StrictMode>
    {/* Apply a theme to the entire application using ThemeProvider. */}
    <ThemeProvider theme={studioTheme}>
      {/* Render the main application component (App) within the theme context. */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
