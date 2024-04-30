import { AgGridReact } from "ag-grid-react";
import React, {useEffect, useMemo, useState} from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function Customerlist(){
    const [customers, setCustomers] = useState([]);

    useEffect(() => fetchData(),[]);

    const fetchData = () => {
        fetch('https://customerrestservice-personaltraining.rahtiapp.fi/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data._embedded.customers))
    }
    
    const defaultColDef = useMemo(()=> {
        return{
            flex: 1,
            filter: true,
            floatingFilter: true
        }
    });

    const [colDefs, setColDefs] = useState([
        {field: "firstname"},
        {field: "lastname"},
        {field: "streetaddress"},
        {field: "postcode"},
        {field: "city"},
        {field: "email"},
        {field: "phone"},
    ])

    return(
        <div className="ag-theme-alpine" style={{ height: 600 }}>
            <AgGridReact rowData={customers} columnDefs={colDefs}
                pagination={true}
                paginationPageSize={10}
                paginationPageSizeSelector={[10,20]}
                defaultColDef={defaultColDef}/>
        </div>
    )
}
