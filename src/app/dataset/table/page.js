import PageComponent from "@/app/pageComponent";
import Tabulate from "./table";
import TabulateInteractive from "./table-interactive";

export const test_user_data = [
    { Name: 'Alice', Age: 25, City: 'New York' },
    { Name: 'Bob', Age: 30, City: 'San Francisco' },
    { Name: 'Charlie', Age: 35, City: 'Chicago' },
    { Name: 'Dane', Age: 40, City: 'Delaware' },
    { Name: 'Eian', Age: 45, City: 'Eden' },
    { Name: 'Fill', Age: 50, City: 'Florida' },
];

export const test_columns = ['Name', 'Age', 'City'];

export default async function Page({}) {  
    return (
        <PageComponent>
            <h1>Table View</h1>
            <TabulateInteractive data={test_user_data} columns={test_columns} />           
        </PageComponent>
    )
}
