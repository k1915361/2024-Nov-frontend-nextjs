'use client';

import React, { useState } from 'react';

export default function Tabulate({ data, columns }) {
  const [sortColumn, setSortColumn] = useState(null);
  const [ascending, setAscending] = useState(true);

  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0;
    if (a[sortColumn] < b[sortColumn]) return ascending ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return ascending ? 1 : -1;
    return 0;
  });

  const handleSort = (column) => {
    if (sortColumn === column) {
      setAscending(!ascending);
    } else {
      setSortColumn(column);
      setAscending(true);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead style={{ backgroundColor: '#f4f4f4' }}>
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                onClick={() => handleSort(column)}
                style={{
                  padding: '10px',
                  cursor: 'pointer',
                  borderBottom: '2px solid #ddd',
                  textAlign: 'left',
                }}
              >
                {column}
                {sortColumn === column && (ascending ? ' ▲' : ' ▼')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              style={{
                backgroundColor: '#fff',
                transition: 'background-color 0s',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = '#eef')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = '#fff') 
              }
            //   '#fff' '#f9f9f9'
            >
              {columns.map((column) => (
                <td
                  key={column}
                  style={{
                    padding: '10px',
                    borderBottom: '1px solid #ddd',
                  }}
                >
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
