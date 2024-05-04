import { AgGridReact } from "ag-grid-react";
import React, {useEffect, useMemo, useState} from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Button } from "@mui/material";
import AddCustomer from "./AddCustomer";
import EditCustomer from "./EditCustomer";

export default function Customerlist(){
    const [customers, setCustomers] = useState([]);

    useEffect(() => fetchData(),[]);

    const fetchData = () => {
        fetch('https://customerrestservice-personaltraining.rahtiapp.fi/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data._embedded.customers))
    }
    
    const saveCustomer = (customer) => {
        fetch('https://customerrestservice-personaltraining.rahtiapp.fi/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const updateCustomer = (customer, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const deleteCustomer = (link) => {
        if (window.confirm('Are you sure?')){
            fetch(link, {method: 'DELETE'})
            .then(res => fetchData())
            .catch(err => console.error(err))
        }
    }
    
    const defaultColDef = useMemo(()=> {
        return{
            flex: 1,
            filter: true,
            floatingFilter: true,
        }
    });

    const [colDefs, setColDefs] = useState([
        {
            headerName: "Delete Customer",
            filter: false,
            field: '_links.self.href',
            cellRenderer: (params) => (
                <Button size="small" color="error" onClick={() => deleteCustomer(params.value)}>Delete</Button>
            ),
        },
        {
            headerName: "Edit Customer",
            filter: false,
            cellRenderer: rowData => <EditCustomer updateCustomer={updateCustomer} customer={rowData.data}/>,
        },
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
            <AddCustomer saveCustomer={saveCustomer}/>
            <AgGridReact rowData={customers} columnDefs={colDefs}
                pagination={true}
                paginationPageSize={10}
                paginationPageSizeSelector={[10,20]}
                defaultColDef={defaultColDef}/>
        </div>
    )
}
