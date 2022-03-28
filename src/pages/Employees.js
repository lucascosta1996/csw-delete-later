import React, { useState } from 'react'
import Table from '../components/Table';
import PlusOneOutlinedIcon from '@mui/icons-material/PlusOneOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { Button } from '@mui/material';

function Employees() {
  const [ add, setAdd ] = useState(false);
  const [ edit, setEdit ] = useState(false);
  const [ del, setDelete ] = useState(false);
  return (
    <>
      <header style={{ display: 'flex' }}>
        <Button
          variant="outlined"
          style={{ margin: '0 10px 0 0', borderColor: '#000', color: '#000' }}
          startIcon={<PlusOneOutlinedIcon />}
          onClick={() => setAdd(!add)}
        >
            Add
        </Button>
        <Button
          variant="outlined"
          style={{ margin: '0 10px', borderColor: '#000', color: '#000' }}
          startIcon={<CreateOutlinedIcon />}
          onClick={() => setEdit(!edit)}
        >
            Edit
        </Button>
        <Button
          variant="outlined"
          style={{ margin: '0 10px', borderColor: '#000', color: '#000' }}
          startIcon={<RemoveOutlinedIcon />}
          onClick={() => setDelete(!del)}
        >
            Delete
        </Button>
      </header>
      <Table
        id="dataTableId"
        className="dataTableClass"
        rows={[
          {
            name: "Giacomo",
            startDate: '28-08-2010',
            role: " SE",
            platoon: "Alchemists"
          },
          {
            name: "Lucas",
            startDate: '20-08-2010',
            role: " SE",
            platoon: "Developers"
          },
        ]}
        columns={[
          "name",
          "startDate",
          "role",
          "platoon"
        ]}
        caption={""}
      />
    </>
  )
}

export default Employees;
