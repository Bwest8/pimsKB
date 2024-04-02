import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import courseCodes from '../data/CourseCodes2023-24.json';
import Link from '@docusaurus/Link';

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
      width: '80px',
      wrap: true,
      wrapHeader: true,
      
    },
    {
      name: 'State Course Name',
      selector: row => row.stateCourseName,
      sortable: true,
      width: '320px',
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
      width: '64px',
    },
    {
      name: 'IB',
      selector: row => row.isIB,
      cell: row => (
        <span>{row.isIB === "true" ? <span class="badge badge--info">IB</span> : ''}</span>
      ),
      width: '64px',
    },
    {
      name: 'Dual Credit',
      selector: row => row.isDualCredit,
      cell: row => (
        <span>{row.isDualCredit === "true" ? <span class="badge badge--success">DC</span> : ''}</span>
      ),
      width: '65px',
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
    <div style={{ padding: '1em', background: '#f9f9f9', borderRadius: '5px' }}>
      <h2>{data.stateCourseName}</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '0.5em', textAlign: 'left' }}>Course Template Field</th>
            <th style={{ border: '1px solid #ccc', padding: '0.5em', textAlign: 'left' }}>Valid Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '0.5em' }}>
              29 - <Link to="../templates/course/#29---alternate-course-code">ALTERNATE COURSE CODE</Link>
              </td>
            <td style={{ border: '1px solid #ccc', padding: '0.5em' }}><code>{data.stateCourseCode}</code></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '0.5em' }}>
            32 - <Link to="../templates/course/#32---dual-credit">DUAL CREDIT</Link>
            </td>
            <td style={{ border: '1px solid #ccc', padding: '0.5em' }}><code>{data.isDualCredit === 'true' ? 'Y' : 'N'}</code></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '0.5em' }}>
              33 - <Link to="../templates/course/#33---advanced-placement-indicator">ADVANCED PLACEMENT INDICATOR</Link>
            </td>
            <td style={{ border: '1px solid #ccc', padding: '0.5em' }}><code>{data.isAP === 'true' ? 'Y' : 'N'}</code></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '0.5em' }}>
              40 - <Link to="../templates/course/#40---international-baccalaureate-indicator">INTERNATIONAL BACCALAUREATE INDICATOR</Link>
            </td>
            <td style={{ border: '1px solid #ccc', padding: '0.5em' }}><code>{data.isIB === 'true' ? 'Y' : 'N'}</code></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '0.5em' }}>
            79 - <Link to="../templates/course/#79---cambridge-advanced-course-indicator">CAMBRIDGE ADVANCED COURSE INDICATOR</Link>
            </td>
            <td style={{ border: '1px solid #ccc', padding: '0.5em' }}><code>{data.isCI === 'true' ? 'Y' : 'N'}</code></td>
          </tr>
        </tbody>
      </table>
      <hr />
      <p style={{ margin: '0 0 0.5em 0', fontWeight: 'bold', color: '#333' }}>
        SCED Code: <span style={{ fontWeight: 'normal' }}>{data.scedCode}</span>
      </p>
      <p style={{ margin: '0 0 0.5em 0', fontWeight: 'bold', color: '#333' }}>
        SCED Description: <br />
        <span style={{ fontWeight: 'normal' }}>{data.scedDescription}</span>
      </p>
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
        minHeight: '75px', // You can adjust this value
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px',
        paddingRight: '8px',
        fontSize: '13px',
        minHeight: '75px', // Add this line and adjust the value as needed
        whiteSpace: 'pre-wrap', // Change this line
      },
    },
  }}
/>   
</div>
  );
};

export default CourseDataTable;