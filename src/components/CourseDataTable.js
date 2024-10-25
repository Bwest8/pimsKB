// CourseDataTable.js

import React, { useState } from "react";
import DataTable from "react-data-table-component";
import courseCodes from "../data/CourseCodes2023-24.json";
import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./CourseDataTable.module.css";
import { Search } from "lucide-react";

const CourseDataTable = () => {
  const [searchText, setSearchText] = useState("");
  const [expandedRows, setExpandedRows] = useState([]);
  const { colorMode } = useColorMode();

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
        <div className={styles.attributesContainer}>
          {row.isAP === "true" && (
            <span className={`${styles.badge} ${styles.badgeAP}`}>AP</span>
          )}
          {row.isIB === "true" && (
            <span className={`${styles.badge} ${styles.badgeIB}`}>IB</span>
          )}
          {row.isDualCredit === "true" && (
            <span className={`${styles.badge} ${styles.badgeDC}`}>DC</span>
          )}
          {row.isCI === "true" && (
            <span className={`${styles.badge} ${styles.badgeCI}`}>CI</span>
          )}
          {row.isFutureReady === "true" && (
            <span className={`${styles.badge} ${styles.badgeFR}`}>FR</span>
          )}
        </div>
      ),
      width: "130px",
      selector: (row) => row.badges,
    },
  ];

  const filteredData = courseCodes.filter((item) => {
    const searchTerms = searchText.toLowerCase().split(" ");

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

    return Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const ExpandableRowComponent = ({ data }) => (
    <div className={styles.expandableRow}>
      <h3>{data.stateCourseName}</h3>
      <table className={styles.expandableTable}>
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
              <code>{data.stateCourseCode}</code>
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
              <code>{data.isDualCredit === "true" ? "Y" : "N"}</code>
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
              <code>{data.isAP === "true" ? "Y" : "N"}</code>
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
              <code>{data.isIB === "true" ? "Y" : "N"}</code>
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
              <code>{data.isCI === "true" ? "Y" : "N"}</code>
            </td>
          </tr>
        </tbody>
      </table>
      <p className={styles.scedCode}>
        SCED Code: <span>{data.scedCode}</span>
      </p>
      <p className={styles.scedDescription}>
        SCED Description: <br />
        <span>{data.scedDescription}</span>
      </p>
    </div>
  );

  const handleRowExpand = (row) => {
    const rowId = row.stateCourseCode;
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
      className: styles.badgeAP,
    },
    {
      label: "IB",
      description: "International Baccalaureate",
      className: styles.badgeIB,
    },
    { label: "DC", description: "Dual Credit", className: styles.badgeDC },
    {
      label: "CI",
      description: "Cambridge Advanced",
      className: styles.badgeCI,
    },
    { label: "FR", description: "Future Ready", className: styles.badgeFR },
  ];

  const rowStyleDescriptions = [
    { label: "New Course", color: "rgb(255, 255, 214)" },
    { label: "Editorial Update", color: "rgb(229, 255, 214)" },
    { label: "Substantive Update", color: "rgb(212, 212, 255)" },
  ];

  return (
    <div className={styles.container}>
      <hr className={styles.divider} />
      <div className={styles.legendSection}>
        <h3 className={styles.legendTitle}>Attributes Key:</h3>
        <div className={styles.badgeDescriptions}>
          {badgeDescriptions.map((badge) => (
            <div key={badge.label} className={styles.badgeDescription}>
              <span className={`${styles.badge} ${badge.className}`}>
                {badge.label}
              </span>
              <span>{badge.description}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.legendSection}>
        <h3 className={styles.legendTitle}>Row Highlight Key:</h3>
        <div className={styles.rowStyleDescriptions}>
          {rowStyleDescriptions.map((style) => (
            <div key={style.label} className={styles.rowStyleDescription}>
              <div
                className={styles.colorSample}
                style={{ backgroundColor: style.color }}
              ></div>
              <span>{style.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.searchSection}>
        <div className={styles.searchInputWrapper}>
          <input
            type="text"
            id="search"
            placeholder="Search..."
            className={styles.searchInput}
            value={searchText}
            onChange={handleSearch}
          />
          <Search className={styles.searchIcon} size={20} />
        </div>
      </div>
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
        theme={colorMode === "dark" ? "dark" : "default"}
      />
    </div>
  );
};

export default CourseDataTable;
