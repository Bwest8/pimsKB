// src/components/badges.js
import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

const colorTextMap = {
  required: "Required",
  optional: "Optional",
  conditional: "Conditionally Required",
  key: "Key",
  updateable: "Updateable",
  // Add more color-to-text mappings as needed
};

const tooltipTextMap = {
  required: "This field is Required",
  optional: "This field is Optional",
  conditional:
    "This field is Conditionally Required. If the condition is not met, leave the field blank.",
  updateable: "This field is Updateable",
  key: "This field is a Key field",
  maxLength: "This field has a maximum length",
  // Add more tooltip text mappings as needed
};

const Badge = ({ color, children, length }) => {
  const { colorMode } = useColorMode();

  const lightBadgeStyles = {
    required: {
      backgroundColor: "rgb(254, 226, 226)",
      color: "rgb(153, 27, 27)",
      borderColor: "rgb(248, 113, 113)",
    },
    key: {
      backgroundColor: "rgb(255, 248, 230)",
      color: "rgb(146, 64, 14)",
      borderColor: "rgb(253, 224, 71)",
    },
    optional: {
      backgroundColor: "rgb(250, 250, 250)",
      color: "rgb(51, 65, 85)",
      borderColor: "rgb(148, 163, 184)",
    },
    updateable: {
      backgroundColor: "rgb(224, 231, 255)",
      color: "rgb(55, 48, 163)",
      borderColor: "rgb(129, 140, 248)",
    },
    conditional: {
      backgroundColor: "rgb(255, 237, 213)",
      color: "rgb(154, 52, 18)",
      borderColor: "rgb(255, 152, 0)",
    },
    maxLength: {
      backgroundColor: "rgb(230, 230, 230)",
      color: "rgb(55, 65, 81)",
      borderColor: "rgb(156, 163, 175)",
    },
  };

  const darkBadgeStyles = {
    required: {
      backgroundColor: "rgb(127, 29, 29)",
      color: "rgb(252, 165, 165)",
      borderColor: "rgb(220, 38, 38)",
    },
    key: {
      backgroundColor: "rgb(74, 58, 5)",
      color: "rgb(254, 243, 199)",
      borderColor: "rgb(217, 119, 6)",
    },
    optional: {
      backgroundColor: "rgb(10, 10, 10)",
      color: "rgb(203, 213, 225)",
      borderColor: "rgb(100, 116, 139)",
    },
    updateable: {
      backgroundColor: "rgb(49, 46, 129)",
      color: "rgb(191, 219, 254)",
      borderColor: "rgb(99, 102, 241)",
    },
    conditional: {
      backgroundColor: "rgb(120, 53, 15)",
      color: "rgb(254, 215, 170)",
      borderColor: "rgb(249, 115, 22)",
    },
    maxLength: {
      backgroundColor: "rgb(31, 41, 55)",
      color: "rgb(197, 204, 216)",
      borderColor: "rgb(75, 85, 99)",
    },
  };

  const badgeStyles = colorMode === "dark" ? darkBadgeStyles : lightBadgeStyles;

  const badgeColor = color || (length ? "maxLength" : "secondary");
  const tooltipText = length
    ? `This field has a maximum length of: ${length}`
    : tooltipTextMap[badgeColor];

  return (
    <span
      title={tooltipText}
      style={{
        ...badgeStyles[badgeColor],
        fontSize: "0.80rem",
        fontWeight: "700",
        padding: "0.25rem 0.625rem",
        borderRadius: "0.25rem",
        border: "1px solid",
        marginRight: "0.5rem",
      }}
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
