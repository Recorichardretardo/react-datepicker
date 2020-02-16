import React from 'react'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';


export const ExportCSV = () => {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = (csvData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileName + fileExtension);
	}
	
	const exportToCSVDATA = (csvData, fileName) => {
		const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'csv', type: 'array' });
        const data = new Blob([excelBuffer], {type: "text/csv;charset=utf-8"});
		FileSaver.saveAs(data, fileName + '.csv');	
	}

	const exportToJSON = (csvData, fileName) => {
		var excelBuffer = JSON.stringify(csvData);
		const data = new Blob([excelBuffer], {type: "application/json;charset=utf-8"});
		FileSaver.saveAs(data, fileName + '.json');	
	}

	const exportToTEXT = (csvData, fileName) => {
		var excelBuffer = JSON.stringify(csvData);
		const data = new Blob([excelBuffer], {type: "text/plain;charset=utf-8"});
		FileSaver.saveAs(data, fileName + '.txt');	
	}
	
	const exportToPDF = (csvData, fileName) => {
		const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'csv', type: 'array' });
        const data = new Blob([excelBuffer], {type: "pdf"});
		FileSaver.saveAs(data, fileName + '.pdf');	
	}

	

	
    const csvData = 
[{
		"EmployeeID": "EMP001",
		"FullName": "Jolly"
	},
	{
		"EmployeeID": "EMP002",
		"FullName": "Macias"
	},
	{
		"EmployeeID": "EMP003",
		"FullName": "Lucian"
	},
	{
		"EmployeeID": "EMP004",
		"FullName": "Blaze"
	},
	{
		"EmployeeID": "EMP005",
		"FullName": "Blossom"
	},
	{
		"EmployeeID": "EMP006",
		"FullName": "Kerry"
	},
	{
		"EmployeeID": "EMP007",
		"FullName": "Adele"
	},
	{
		"EmployeeID": "EMP008",
		"FullName": "Freaky"
	},
	{
		"EmployeeID": "EMP009",
		"FullName": "Brooke"
	},
	{
		"EmployeeID": "EMP010",
		"FullName": "FreakyJolly.Com"
	}
];
    return (
		<>
        <button  onClick={(e) => exportToCSV(csvData,"test")}>Export Excel</button>
		<button  onClick={(e) => exportToCSVDATA(csvData,"test")}>Export CSV</button>
		<button  onClick={(e) => exportToJSON(csvData,"test")}>Export JSON</button>
		<button  onClick={(e) => exportToTEXT(csvData,"test")}>Export Text</button>
		
		</>
    )
}


export default ExportCSV;