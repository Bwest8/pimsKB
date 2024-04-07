import React from "react";
import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";
import loadSequenceSvg from "!!url-loader!@site/static/img/icons/load-sequence.svg";
import targetTableSvg from "!!url-loader!@site/static/img/icons/target-table.svg";
import chevronRightSmallSvg from "!!url-loader!@site/static/img/icons/chevron-right-small.svg";

const TemplateCard = ({ fields, collected, targetTables, dependencies }) => {
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === "dark";

  return (
    <div
      className={`${
        isDarkTheme
          ? "bg-[hsl(0,0%,15%)] text-white"
          : "bg-[hsl(0,0%,99%)] text-gray-800 shadow-md"
      } rounded-lg p-4`}
    >
      <div className="mb-2">
        <h3>
          ({fields} Fields, {collected} Collected, Delimited)
        </h3>
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <em className="flex items-center">
            <img
              src={targetTableSvg}
              className={`h-5 w-5 mr-2 ${isDarkTheme ? "filter invert" : ""}`}
              alt="Target Table"
            />{" "}
          </em>
          <strong
            className={`font-semibold ${
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
          <em className="flex items-center">
            <img
              src={loadSequenceSvg}
              className={`h-5 w-5 mr-2 ${isDarkTheme ? "filter invert" : ""}`}
              alt="Load Sequence"
            />
          </em>
          <strong
            className={`font-semibold ${
              isDarkTheme ? "text-white" : "text-gray-800"
            }`}
          >
            Load Sequence/Dependencies:
          </strong>
        </div>
        {dependencies.length === 0 ? (
          <p className={`ml-7 ${isDarkTheme ? "text-white" : "text-gray-800"}`}>
            No dependencies
          </p>
        ) : (
          <div className="ml-7 flex flex-wrap items-center">
            {dependencies.map((dependency, index) => (
              <React.Fragment key={dependency.link}>
                <div className="flex items-center">
                  <em className="flex items-center">
                    <Link to={dependency.link}>{dependency.label}</Link>
                    {index < dependencies.length - 1 && (
                      <img
                        src={chevronRightSmallSvg}
                        className={`h-4 w-4 mx-0.5 ${
                          isDarkTheme ? "filter invert" : "text-gray-600"
                        }`}
                        alt="Chevron Right"
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
