import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Buffer } from 'buffer';

// Declare global window properties
declare global {
  interface Window {
    Buffer: typeof Buffer;
  }
}

// Set up polyfills
window.Buffer = window.Buffer || Buffer;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);