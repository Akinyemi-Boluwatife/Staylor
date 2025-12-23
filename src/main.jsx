import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ErrorBoundary } from "react-error-boundary";

import { ThemeProvider } from "./components/theme-provider.jsx";
import ErrorFallBack from "./components/ErrorFallBack.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallBack}
      onReset={() => window.location.replace("/")}
    >
      <ThemeProvider storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>,
);
