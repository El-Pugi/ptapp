import React from 'react';
import { Button } from '@mui/material';
import { CSVLink } from 'react-csv';

const ExportCSV = ({ data, filename }) => {
    const headers = [
        { label: 'First Name', key: 'firstname' },
        { label: 'Last Name', key: 'lastname' },
        { label: 'Street Address', key: 'streetaddress' },
        { label: 'Postcode', key: 'postcode' },
        { label: 'City', key: 'city' },
        { label: 'Email', key: 'email' },
        { label: 'Phone', key: 'phone' }
    ];

    return (
        <CSVLink data={data} headers={headers} filename={`${filename}.csv`}>
            <Button style={{margin: 10}}variant="contained" color="primary">Export to CSV</Button>
        </CSVLink>
    );
}

export default ExportCSV;
