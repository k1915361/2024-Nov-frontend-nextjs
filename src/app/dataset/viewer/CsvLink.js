import { ButtonLight } from "@/app/user/models/page";

function downloadCSV(csvData, filename) {
    const csvContent = "data:text/csv;charset=utf-8," + csvData.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link); 
    link.click();
    document.body.removeChild(link); 
}

const csvDataExample = [
    ["Name", "Age", "City"],
    ["John Doe", "30", "New York"],
    ["Jane Doe", "25", "London"],
];

function CSVLink({data, children, filename='data.csv'}) {
    const handleDownload = () => {
        downloadCSV(data, filename);
    };

    return (
        <div>
            <ButtonLight
                onClick={handleDownload}
            >
                {children || 'Download CSV'}
            </ButtonLight>           
        </div>
    );
}

export default CSVLink