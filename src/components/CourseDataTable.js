//src/components/CourseDataTable.js

import React, { useState } from "react";
import DataTable from "react-data-table-component";
import courseCodes from "../data/CourseCodes2023-24.json";
import Link from "@docusaurus/Link";

const CourseDataTable = () => {
  const [searchText, setSearchText] = useState("");
  const [expandedRows, setExpandedRows] = useState([]);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const columns = [
    {
      name: "State Course Code",
      selector: (row) => row.stateCourseCode,
      sortable: true,
      width: "160px",
      wrap: true,
      wrapHeader: true,
    },
    {
      name: "State Course Name",
      selector: (row) => row.stateCourseName,
      sortable: true,
      width: "320px",
    },
    {
      name: "Subject Area",
      selector: (row) => row.subjectArea,
      sortable: true,
    },
    {
      name: "Attributes",
      cell: (row) => (
        <div>
          {row.isAP === "true" && (
            <span className="badge badge--primary">AP</span>
          )}
          {row.isIB === "true" && (
            <span className="badge badge--info badge--black">IB</span>
          )}
          {row.isDualCredit === "true" && (
            <span className="badge badge--success">DC</span>
          )}
          {row.isCI === "true" && (
            <span className="badge badge--warning">CI</span>
          )}
          {row.isFutureReady === "true" && (
            <span className="badge badge--secondary">FR</span>
          )}
        </div>
      ),
      width: "200px",
      selector: (row) => row.badges,
      headerClassName: "badges-header",
    },
  ];

  const filteredData = courseCodes.filter((item) => {
    const searchTerms = searchText.toLowerCase().split(" ");

    // Check if any search term matches special terms
    if (
      searchTerms.some((term) => ["ap", "advanced", "placement"].includes(term))
    ) {
      return item.isAP === "true";
    } else if (
      searchTerms.some((term) =>
        ["ib", "international", "baccalaureate"].includes(term)
      )
    ) {
      return item.isIB === "true";
    } else if (
      searchTerms.some((term) => ["dc", "dual", "credit"].includes(term))
    ) {
      return item.isDualCredit === "true";
    } else if (
      searchTerms.some((term) => ["ci", "cambridge", "advanced"].includes(term))
    ) {
      return item.isCI === "true";
    } else if (
      searchTerms.some((term) => ["fr", "future", "ready"].includes(term))
    ) {
      return item.isFutureReady === "true";
    } else if (searchTerms.some((term) => ["new", "course"].includes(term))) {
      return item.IsNew === "true";
    } else if (searchTerms.some((term) => ["editorial"].includes(term))) {
      return item.IsEditorialUpdate === "true";
    } else if (searchTerms.some((term) => ["substantive"].includes(term))) {
      return item.IsSubstantiveUpdate === "true";
    } else if (searchTerms.includes("update")) {
      return (
        item.IsEditorialUpdate === "true" || item.IsSubstantiveUpdate === "true"
      );
    }

    // If no special terms are found, check all values
    return Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const ExpandableRowComponent = ({ data }) => (
    <div
      style={{
        padding: "1em",
        background: "#f9f9f9",
        fontSize: "0.8em",
        border: "1px solid #ccc",
        borderTop: "none",
        borderRadius: "0 0 5px 5px",
      }}
    >
      <h3>{data.stateCourseName}</h3>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #ccc",
                padding: "0.5em",
                textAlign: "left",
              }}
            >
              Course Template Field
            </th>
            <th
              style={{
                border: "1px solid #ccc",
                padding: "0.5em",
                textAlign: "left",
              }}
            >
              Valid Value
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "0.5em" }}>
              29 -{" "}
              <Link to="../templates/course/#29---alternate-course-code">
                ALTERNATE COURSE CODE
              </Link>
            </td>
            <td style={{ border: "1px solid #ccc", padding: "0.5em" }}>
              <b>
                <code>{data.stateCourseCode}</code>
              </b>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "0.5em" }}>
              32 -{" "}
              <Link to="../templates/course/#32---dual-credit">
                DUAL CREDIT
              </Link>
            </td>
            <td style={{ border: "1px solid #ccc", padding: "0.5em" }}>
              <b>
                <code>{data.isDualCredit === "true" ? "Y" : "N"}</code>
              </b>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "0.5em" }}>
              33 -{" "}
              <Link to="../templates/course/#33---advanced-placement-indicator">
                ADVANCED PLACEMENT INDICATOR
              </Link>
            </td>
            <td style={{ border: "1px solid #ccc", padding: "0.5em" }}>
              <b>
                <code>{data.isAP === "true" ? "Y" : "N"}</code>
              </b>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "0.5em" }}>
              40 -{" "}
              <Link to="../templates/course/#40---international-baccalaureate-indicator">
                INTERNATIONAL BACCALAUREATE INDICATOR
              </Link>
            </td>
            <td style={{ border: "1px solid #ccc", padding: "0.5em" }}>
              <b>
                <code>{data.isIB === "true" ? "Y" : "N"}</code>
              </b>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "0.5em" }}>
              79 -{" "}
              <Link to="../templates/course/#79---cambridge-advanced-course-indicator">
                CAMBRIDGE ADVANCED COURSE INDICATOR
              </Link>
            </td>
            <td style={{ border: "1px solid #ccc", padding: "0.5em" }}>
              <b>
                <code>{data.isCI === "true" ? "Y" : "N"}</code>
              </b>
            </td>
          </tr>
        </tbody>
      </table>
      <p style={{ margin: "0 0 0.5em 0", fontWeight: "bold", color: "#333" }}>
        SCED Code: <span style={{ fontWeight: "normal" }}>{data.scedCode}</span>
      </p>
      <p style={{ margin: "0 0 0.5em 0", fontWeight: "bold", color: "#333" }}>
        SCED Description: <br />
        <span style={{ fontWeight: "normal", wordWrap: "break-word" }}>
          {data.scedDescription}
        </span>
      </p>
    </div>
  );

  const handleRowExpand = (row) => {
    const rowId = row.id;
    const currentExpandedRows = expandedRows;
    const isRowExpanded = currentExpandedRows.includes(rowId);

    if (isRowExpanded) {
      setExpandedRows(currentExpandedRows.filter((id) => id !== rowId));
    } else {
      setExpandedRows([...currentExpandedRows, rowId]);
    }
  };

  const conditionalRowStyles = [
    {
      when: (row) => row.IsNew === "true",
      style: {
        backgroundColor: "rgba(255, 255, 0, 0.2)",
      },
    },
    {
      when: (row) => row.IsEditorialUpdate === "true",
      style: {
        backgroundColor: "rgba(0, 255, 0, 0.2)",
      },
    },
    {
      when: (row) => row.IsSubstantiveUpdate === "true",
      style: {
        backgroundColor: "rgba(0, 0, 255, 0.2)",
      },
    },
    {
      when: (row) => expandedRows.includes(row.stateCourseCode),
      style: {
        fontWeight: "bold",
      },
    },
  ];

  const badgeDescriptions = [
    { label: "AP", description: "Advanced Placement" },
    { label: "IB", description: "International Baccalaureate" },
    { label: "DC", description: "Dual Credit" },
    { label: "CI", description: "Cambridge Advanced" },
    { label: "FR", description: "Future Ready" },
  ];

  const rowStyleDescriptions = [
    { label: "New Course", color: "rgba(255, 255, 0, 0.2)" },
    { label: "Editorial Update", color: "rgba(0, 255, 0, 0.2)" },
    { label: "Substantive Update", color: "rgba(0, 0, 255, 0.2)" },
  ];

  const getBadgeClassName = (label) => {
    switch (label) {
      case "AP":
        return "badge--primary";
      case "IB":
        return "badge--info badge--black";
      case "DC":
        return "badge--success";
      case "CI":
        return "badge--warning";
      case "FR":
        return "badge--secondary";
      default:
        return "";
    }
  };

  return (
    <div>
      <div style={{ marginTop: "10px", fontSize: "0.8em" }}>
        <span style={{ fontWeight: "bold" }}>Attribute Key:</span>
        <div style={{ display: "flex", flexWrap: "wrap", marginTop: "5px" }}>
          {badgeDescriptions.map((badge) => (
            <div
              key={badge.label}
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <span className={`badge ${getBadgeClassName(badge.label)}`}>
                {badge.label}
              </span>
              <span style={{ marginLeft: "5px" }}>{badge.description}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "10px", fontSize: "0.8em" }}>
        <span style={{ fontWeight: "bold" }}>Row Highlight Key:</span>
        <div style={{ display: "flex", flexWrap: "wrap", marginTop: "5px" }}>
          {rowStyleDescriptions.map((style) => (
            <div
              key={style.label}
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: style.color,
                  marginRight: "5px",
                }}
              ></div>
              <span>{style.label}</span>
            </div>
          ))}
        </div>
        <br />
        <div>
          <input
            type="text"
            id="search"
            placeholder="Search..."
            style={{ fontSize: "20px", width: "300px" }}
            value={searchText}
            onChange={handleSearch}
          />
        </div>{" "}
      </div>
      <hr />
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        expandableRows
        expandableRowExpanded={(row) =>
          expandedRows.includes(row.stateCourseCode)
        }
        expandableRowsComponent={ExpandableRowComponent}
        onRowExpandToggled={handleRowExpand}
        conditionalRowStyles={conditionalRowStyles}
        keyField="stateCourseCode"
      />
    </div>
  );
};

export default CourseDataTable;
