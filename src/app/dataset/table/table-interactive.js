'use client';
import './styles.css'

import React, { useState } from 'react';

export default function TabulateInteractive({ data, columns }) {
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
        <div className='table-container'>
            <table className='table_'>
                <thead>
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column}
                            onClick={() => handleSort(column)}                            
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
                    >
                        {columns.map((column) => (
                            <td key={column}
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
