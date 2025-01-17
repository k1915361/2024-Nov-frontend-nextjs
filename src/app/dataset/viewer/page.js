'use client'

import { API_HTTP } from '@/app/login/fetchData';
import { useState, useEffect } from 'react';
import CSVLink from './CsvLink';
import { TabulateArray } from './tabulateArray';



function MyComponent() {
    const [csvData, setCsvData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_HTTP}/dataset/1-20241107_192036-CS_dataset/.csv`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const csvText = await response.text();
                const rows = csvText.split('\n').map(row => row.split(','));
                setCsvData(rows)
            } catch (error) {
                console.error("Error fetching CSV data:", error);
            }
        };

        fetchData();
    }, []);

    if (!csvData) {
        return <div>Loading CSV data...</div>;
    }

    return (
        <div>
            <CSVLink data={csvData} filename={"data.csv"}>
                Download CSV
            </CSVLink>
            <TabulateArray csv_data={csvData} />
        </div>
    );
}

export default MyComponent;