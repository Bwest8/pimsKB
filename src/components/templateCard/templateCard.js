import React from "react";
import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";
import LoadSequenceSvg from "./load-sequence.svg";
import TargetTableSvg from "./target-table.svg";
import ChevronRightSmallSvg from "./chevron-right-small.svg";

const TemplateCard = ({ fields, collected, targetTables, dependencies }) => {
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === "dark";

  return (
    <div
      className={`${
        isDarkTheme ? "text-white" : "text-gray-800 shadow-sm"
      } rounded-md p-4`}
      style={{ backgroundColor: "var(--ifm-navbar-background-color)" }}
    >
      <div className="mb-2">
        <h3>
          ({fields} Fields, {collected} Collected, Delimited)
        </h3>
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <TargetTableSvg
            className={`h-5 w-5 mr-2 ${isDarkTheme ? "filter invert" : ""}`}
            alt="Target Table"
          />
          <strong
            className={`font-bold ${
              isDarkTheme ? "text-white" : "text-gray-800"
            }`}
          >
            Target Table:&nbsp;
          </strong>
          {targetTables.map((table, index) => (
            <React.Fragment key={table}>
              <code>{table}</code>
              {index < targetTables.length - 1 && ", "}
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center">
          <LoadSequenceSvg
            className={`h-5 w-5 mr-2 ${isDarkTheme ? "filter invert" : ""}`}
            alt="Load Sequence"
          />
          <span
            className={`font-bold ${
              isDarkTheme ? "text-white" : "text-gray-800"
            }`}
          >
            Load Sequence/Dependencies:
          </span>
        </div>
        {dependencies.length === 0 ? (
          <p className={`ml-7 ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
            No dependencies
          </p>
        ) : (
          <div className="ml-7 flex flex-wrap items-center">
            {dependencies.map((dependency, index) => (
              <React.Fragment key={dependency.link}>
                <div className="flex items-center font-medium">
                  <em>
                    <Link to={dependency.link}>{dependency.label}</Link>
                    {index < dependencies.length - 1 && (
                      <ChevronRightSmallSvg
                        className={`h-4 w-4 mx-0.4 align-middle ${
                          isDarkTheme ? "filter invert" : "text-gray-600"
                        }`}
                      />
                    )}
                  </em>
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateCard;
