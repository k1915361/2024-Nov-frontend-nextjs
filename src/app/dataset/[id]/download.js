import { API as API_} from '@/app/login/fetchData';
import React from 'react';

const DownloadButton = (API=API_, route='/download/') => {
    const handleDownload = async () => {
        const response = await fetch(`${API}${route}`);
        if (response.ok) {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'downloaded_folder.zip';
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } else {
            console.error('Download failed');
        }
    };

    return (
        <button onClick={handleDownload}>
            Download Zip File
        </button>
    );
};

export default DownloadButton;
