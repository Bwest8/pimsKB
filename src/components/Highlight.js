import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function Highlight({ children }) {
  const { colorMode } = useColorMode();

  return (
    <span
      style={{
        backgroundColor: "yellow",
        color: "black",
        borderRadius: "2px",
        padding: "0.2rem",
        boxShadow:
          colorMode === "dark"
            ? "0 0 2px 1px rgba(255, 255, 255, 0.25)"
            : "none",
      }}
    >
      {children}
    </span>
  );
}
