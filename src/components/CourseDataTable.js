// CourseDataTable.js

import React, { useState } from "react";
import DataTable from "react-data-table-component";
import courseCodes from "../data/CourseCodes2023-24.json";
import Link from "@docusaurus/Link";
import styles from "./CourseDataTable.module.css";

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
            <span
              className="badge badge--primary"
              style={{ marginRight: "5px" }}
            >
              AP
            </span>
          )}
          {row.isIB === "true" && (
            <span className="badge badge--info" style={{ marginRight: "5px" }}>
              IB
            </span>
          )}
          {row.isDualCredit === "true" && (
            <span
              className="badge badge--success"
              style={{ marginRight: "5px" }}
            >
              DC
            </span>
          )}
          {row.isCI === "true" && (
            <span
              className="badge badge--warning"
              style={{ marginRight: "5px" }}
            >
              CI
            </span>
          )}
          {row.isFutureReady === "true" && (
            <span
              className="badge badge--secondary"
              style={{ marginRight: "5px" }}
            >
              FR
            </span>
          )}
        </div>
      ),
      width: "130px",
      selector: (row) => row.badges,
      headerClassName: styles.badgesHeader,
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
    <div className={styles.expandableRow}>
      <h3>{data.stateCourseName}</h3>
      <table>
        <thead>
          <tr>
            <th>Course Template Field</th>
            <th>Valid Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              29 -{" "}
              <Link to="../templates/course/#29---alternate-course-code">
                ALTERNATE COURSE CODE
              </Link>
            </td>
            <td>
              <b>
                <code>{data.stateCourseCode}</code>
              </b>
            </td>
          </tr>
          <tr>
            <td>
              32 -{" "}
              <Link to="../templates/course/#32---dual-credit">
                DUAL CREDIT
              </Link>
            </td>
            <td>
              <b>
                <code>{data.isDualCredit === "true" ? "Y" : "N"}</code>
              </b>
            </td>
          </tr>
          <tr>
            <td>
              33 -{" "}
              <Link to="../templates/course/#33---advanced-placement-indicator">
                ADVANCED PLACEMENT INDICATOR
              </Link>
            </td>
            <td>
              <b>
                <code>{data.isAP === "true" ? "Y" : "N"}</code>
              </b>
            </td>
          </tr>
          <tr>
            <td>
              40 -{" "}
              <Link to="../templates/course/#40---international-baccalaureate-indicator">
                INTERNATIONAL BACCALAUREATE INDICATOR
              </Link>
            </td>
            <td>
              <b>
                <code>{data.isIB === "true" ? "Y" : "N"}</code>
              </b>
            </td>
          </tr>
          <tr>
            <td>
              79 -{" "}
              <Link to="../templates/course/#79---cambridge-advanced-course-indicator">
                CAMBRIDGE ADVANCED COURSE INDICATOR
              </Link>
            </td>
            <td>
              <b>
                <code>{data.isCI === "true" ? "Y" : "N"}</code>
              </b>
            </td>
          </tr>
        </tbody>
      </table>
      <p className={styles.scedCodeLabel}>
        SCED Code: <span className={styles.scedCodeValue}>{data.scedCode}</span>
      </p>
      <p className={styles.scedDescriptionLabel}>
        SCED Description: <br />
        <span className={styles.scedDescriptionValue}>
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
    {
      label: "AP",
      description: "Advanced Placement",
      className: "badge--primary",
    },
    {
      label: "IB",
      description: "International Baccalaureate",
      className: "badge--info",
    },
    { label: "DC", description: "Dual Credit", className: "badge--success" },
    {
      label: "CI",
      description: "Cambridge Advanced",
      className: "badge--warning",
    },
    { label: "FR", description: "Future Ready", className: "badge--secondary" },
  ];

  const rowStyleDescriptions = [
    { label: "New Course", color: "rgb(255, 255, 214)" },
    { label: "Editorial Update", color: "rgb(229, 255, 214)" },
    { label: "Substantive Update", color: "rgb(212, 212, 255)" },
  ];

  return (
    <div>
      <hr />
      <div className={styles.legendContainer}>
        <span className={styles.legendTitle}>Attributes Key:</span>
        <div className={styles.badgeDescriptionsContainer}>
          {badgeDescriptions.map((badge) => (
            <div key={badge.label} className={styles.badgeDescription}>
              <span
                className={`badge ${badge.className}`}
                style={{ marginRight: "5px" }}
              >
                {badge.label}
              </span>
              <span>{badge.description}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.legendContainer}>
        <span className={styles.legendTitle}>Row Highlight Key:</span>
        <div className={styles.rowStyleDescriptionsContainer}>
          {rowStyleDescriptions.map((style) => (
            <div key={style.label} className={styles.rowStyleDescription}>
              <div
                className={styles.rowStyleColor}
                style={{ backgroundColor: style.color }}
              ></div>
              <span>{style.label}</span>
            </div>
          ))}
        </div>
        <hr />
        <div>
          <input
            type="text"
            id="search"
            placeholder="Search..."
            className={styles.searchInput}
            value={searchText}
            onChange={handleSearch}
          />
        </div>
      </div>
      <br />
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        paginationPerPage={15}
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
