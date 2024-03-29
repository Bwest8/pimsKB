// src/components/Badge.js
import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./badges.module.css";

const colorTextMap = {
  required: "Required",
  optional: "Optional",
  conditional: "Conditionally Required",
  key: "Key",
  updateable: "Updateable",
};

const tooltipTextMap = {
  required: "This field is Required",
  optional: "This field is Optional",
  conditional:
    "This field is Conditionally Required. If the condition is not met, leave the field blank.",
  updateable: "This field is Updateable",
  key: "This field is a Key field",
  maxLength: "This field has a maximum length",
};

const Badge = ({ color, children, length }) => {
  const { colorMode } = useColorMode();
  const badgeColor = color || (length ? "maxLength" : "secondary");
  const tooltipText = length
    ? `This field has a maximum length of: ${length}`
    : tooltipTextMap[badgeColor];

  return (
    <span
      title={tooltipText}
      className={`${styles.badge} ${styles[badgeColor]}`}
    >
      {length ? (
        <>
          Max Length: <code>{length}</code>
        </>
      ) : (
        children || colorTextMap[color]
      )}
    </span>
  );
};

export default Badge;