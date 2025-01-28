'use client'

import { API_HTTP } from '@/app/login/fetchData';
import { useState, useEffect } from 'react';
import CSVLink from './CsvLink';
import { TabulateArray } from './tabulateArray';

function CsvTableAndDownloadButton({apiAddress = `${API_HTTP}/dataset/1-20241107_192036-CS_dataset/.csv`}) {
    const [csvData, setCsvData] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiAddress, {credentials: 'include'});
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}.`);
                }
                const csvText = await response.text();
                const rows = csvText.split('\n').map(row => row.split(','));
                setCsvData(rows)
            } catch (error) {
                if (error.toString() === "Error: HTTP error! status: 404.") {
                    setMessage('This dataset does not have a CSV data.')
            }
            }
        };

        fetchData();
    }, []);

    if (!csvData) {
        if (message) {
            return <div>{message}</div>
        }
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

export default CsvTableAndDownloadButton;