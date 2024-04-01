import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import courseCodes from '../data/CourseCodes2023-24.json';

const CourseDataTable = () => {
  const [searchText, setSearchText] = useState('');
  const [expandedRows, setExpandedRows] = useState([]);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const columns = [
    {
      name: 'State Course Code',
      selector: row => row.stateCourseCode,
      sortable: true,
      width: '150px',
    },
    {
      name: 'State Course Name',
      selector: row => row.stateCourseName,
      sortable: true,
    },
    {
      name: 'Subject Area',
      selector: row => row.subjectArea,
      sortable: true,
    },
    {
      name: 'AP',
      selector: row => row.isAP,
      cell: row => (
        <span>{row.isAP === "true" ? <span class="badge badge--primary">AP</span> : ''}</span>
      ),
      width: '70px',
    },
    {
      name: 'IB',
      selector: row => row.isIB,
      cell: row => (
        <span>{row.isIB === "true" ? <span class="badge badge--info">IB</span> : ''}</span>
      ),
      width: '70px',
    },
    {
      name: 'Dual Credit',
      selector: row => row.isDualCredit,
      cell: row => (
        <span>{row.isDualCredit === "true" ? <span class="badge badge--success">DC</span> : ''}</span>
      ),
        width: '70px',
    },
    {
      name: 'CI',
      selector: row => row.isCI,
      cell: row => (
        <span>{row.isCI === "true" ? <span class="badge badge--warning">CI</span> : ''}</span>
      ),
      width: '70px',
    },
    {
      name: 'Future Ready',
      selector: row => row.isFutureReady,
      cell: row => (
        <span>{row.isFutureReady === "true" ? <span class="badge badge--secondary">FR</span> : ''}</span>
      ),
      width: '70px',
    },
  ];

  const filteredData = courseCodes.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const ExpandableRowComponent = ({ data }) => (
    <div>
      <p><b>SCED Code:</b> {data.scedCode}</p>
      <p><b>SCED Description:</b> <br />{data.scedDescription}</p>
    </div>
  );

  const handleRowExpand = (row) => {
    const rowId = row.id;
    const currentExpandedRows = expandedRows;
    const isRowExpanded = currentExpandedRows.includes(rowId);
  
    if (isRowExpanded) {
      setExpandedRows(currentExpandedRows.filter(id => id !== rowId));
    } else {
      setExpandedRows([...currentExpandedRows, rowId]);
    }
  };

  const conditionalRowStyles = [
    {
      when: row => row.IsNew === "true",
      style: {
        backgroundColor: 'rgba(255, 255, 0, 0.2)',
      },
    },
    {
      when: row => row.IsEditorialUpdate === "true",
      style: {
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
      },
    },
    {
      when: row => row.IsSubstantiveUpdate === "true",
      style: {
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
      },
    },
  ];

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearch}
        />
      </div>
      <br />
      <DataTable
  columns={columns}
  data={filteredData}
  pagination
  expandableRows
  expandableRowExpanded={row => expandedRows.includes(row.stateCourseCode)}
  expandableRowsComponent={ExpandableRowComponent}
  onRowExpandToggled={handleRowExpand}
  conditionalRowStyles={conditionalRowStyles}
  keyField="stateCourseCode"
  customStyles={{
    headRow: {
      style: {
        minHeight: '56px',
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px',
        paddingRight: '8px',
        fontSize: '14px',
      },
    },
  }}
  />
    </div>
  );
};

export default CourseDataTable;