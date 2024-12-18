import { fetchResponse} from '@/app/login/fetchData';
import { ButtonLight } from '@/app/user/models/page';
import React from 'react';

const DownloadButton = ({id, route='/api/dataset/download/'}) => {
    const handleDownload = async () => {
        const response = await fetchResponse(`${route}${id}/`, {});
        if (!response.ok) {
            console.error('Download failed');
            return
        } 

        const disposition = response.headers.get('Content-Disposition');
        let filename = 'file.zip'; 
        
        if (disposition && disposition.includes('filename=')) {
            const match = disposition.match(/filename="(.+)"/);
            if (match && match[1]) {
                filename = match[1];
            }
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        
    };

    return (
        <ButtonLight onClick={handleDownload}>
            Download Zip File
        </ButtonLight>
    );
};

export default DownloadButton;
