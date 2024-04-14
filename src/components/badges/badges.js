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
  required:
    "This field is required and must be populated.\nLeaving it blank will result in an error.",
  optional:
    "This field is optional.\nYou may choose to populate it or leave it blank.",
  conditional:
    "This field is conditionally required.\nIf the condition is met, the field must be populated.\nOtherwise, leave it blank.",
  updateable:
    "This field will be updated in the target table if the entry exists and the value of this field has changed.",
  key: "Uniquely identifies the record. Cannot be changed.\nIf incorrect, delete and re-enter the entire record with PDE assistance.",
  maxLength: "This field has a maximum length",
};

const Badge = ({ color, children, length }) => {
  const badgeColor = color || (length ? "maxLength" : "secondary");
  const tooltipText = length
    ? `This field has a maximum length of: ${length}`
    : tooltipTextMap[badgeColor].replace(/\n/g, "\n");

  return (
    <span
      data-tooltip={tooltipText}
      className={`${styles.badge} ${styles[badgeColor]} ${styles.tooltip}`}
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
