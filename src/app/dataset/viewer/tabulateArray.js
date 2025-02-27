import { API_ROOT } from '@/app/login/fetchData';
import { useState, useEffect } from 'react';
import '@/app/dataset/table/styles.css'
import { arrayLast } from '../tree/[id]/[...path]/page';

export function TextLighter({children, ...props}) {
    return <div className="fw-lighter" {...props}>
        {children}
    </div>
}

export function TabulateArray({csv_data, apiAddress=`${API_ROOT}/dataset/1-20241107_192036-CS_dataset/.csv`}) {
	const [sortColumn, setSortColumn] = useState(null);
	const [sortOrder, setSortOrder] = useState('asc');
	const [columns, setColumns] = useState(csv_data[0])
	const [csvData, setCsvData] = useState(csv_data.slice(1))

	const handleSort = (columnIndex) => {
		if (!csvData) {
			return; 
		}
		
		const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
		const sortedData = [...csvData]; 
		
		sortedData.sort((rowA, rowB) => {
			const valueA = rowA[columnIndex];
			const valueB = rowB[columnIndex];
						
			if (isNaN(valueA) || isNaN(valueB)) {
				return valueA.localeCompare(valueB, undefined, { numeric: true }); 
			} else {
				return valueA - valueB; 
			}
		});
		
		if (sortOrder === 'desc') {
			sortedData.reverse(); 
		}
		
		setCsvData(sortedData)
		setSortColumn(columnIndex);
		setSortOrder(newSortOrder);
	};
	
	const getDisplayData = () => {
		return csvData
	};
	
	if (!csvData) {
		return <div>Loading CSV data...</div>;
	}
	
	return (
		<div className='table-container'>
			<TextLighter>
                (Showing maximum of 50 rows of CSV file.)
            </TextLighter>
			<table className='table_'>
				<thead>
					<tr>
						{columns.map((header, index) => (
							<th key={index}
								onClick={() => handleSort(index)}
							>
								{header}
								{sortColumn === index ? (sortOrder === 'asc' ? '▲' : '▼') : ' '}			
							</th>
						))}
					</tr>
				</thead>
			<tbody>
				{getDisplayData().map((row, rowIndex) => (
					<tr key={rowIndex}>
					{row.map((cell, cellIndex) => (
						<td key={cellIndex}>{cell}</td>
					))}
					</tr>
				))}
			</tbody>
			</table>
		</div>
	);
}

export default TabulateArray;