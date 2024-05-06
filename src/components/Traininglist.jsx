import { AgGridReact } from "ag-grid-react";
import React, {useState, useMemo, useEffect} from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import moment from "moment";
import { Button } from "@mui/material";

export default function Traininglist(){
    const [trainings, setTrainings] = useState([]);

    useEffect(() => fetchData(),[]);

    const fetchData = () => {
        fetch('https://customerrestservice-personaltraining.rahtiapp.fi/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
    }

    const deleteTraining = (id) => {
        if (window.confirm('Are you sure?')){
            fetch(`https://customerrestservice-personaltraining.rahtiapp.fi/api/trainings/${id}`, {method: 'DELETE'})
            .then(res => fetchData())
            .catch(err => console.error(err))
        }
    }

    const defaultColDef = useMemo(() =>{
        return{
            flex: 1,
            filter: true,
            floatingFilter: true
        }
    });

    const [colDefs, setColDefs] = useState([
        {
            headerName: "Delete Training",
            filter: false,
            field: 'id',
            cellRenderer: (params) => (
                <Button size="small" color="error" variant="contained" onClick={() => deleteTraining(params.data.id)}>Delete</Button>
            ),
        },
        {field: "activity"},
        {field: "date",
            valueFormatter: p => moment(p.data.date).format('DD.MM.YYYY HH:mm')
        },
        {field: "duration"},
        {field: "customer", 
            valueGetter: p => p.data.customer.firstname + ' ' + p.data.customer.lastname
        }
    ]);

    return(
        <div className="ag-theme-alpine" style={{ height: 600 }}>
            <AgGridReact rowData={trainings} columnDefs={colDefs}
            defaultColDef={defaultColDef}/>
        </div>
    )
}

