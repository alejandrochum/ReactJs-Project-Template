import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { Divider, Button } from "@mui/material"

import InfoIcon from '@mui/icons-material/Info';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const AllStudentsView = (props) => {
  const { students, deleteStudent } = props;

  if (!students.length) {
    return (
      <div>
        <div className="Main-title">
          <h1 style={{ marginBottom: "20px" }}>Students</h1>
          <Divider variant="middle" />
        </div>
        <p>There are no students.</p>
        <Link className="link" to={`newstudent`}>
          <Button variant="contained" color="primary">Add New Student</Button>
        </Link>
      </div>
    );
  }

  let rows = students.map(student => {
    return {
      id: student.id, col1: student.firstname, col2: student.lastname, col3: student.campus?.name
    }
  })

  const columns = [
    {
      field: 'col0', headerName: 'Info', width: 65, align: "center", renderCell: (cellValues) => {
        return (
          <Link style={{ display: 'flex', alignItems: 'center' }} to={`/student/${cellValues.row.id}`}>
            <InfoIcon
              variant="contained"
              color="primary"
            >
            </InfoIcon>
          </Link>
        )
      }
    },
    { field: 'col1', headerName: 'First Name', width: 250 },
    { field: 'col2', headerName: 'Last Name', width: 250 },
    { field: 'col3', headerName: 'Campus', width: 250 },
    {
      field: 'col4', headerName: 'Delete', flex: 1, headerAlign: "center", align: 'center', renderCell: (cellValues) => {
        return (
          <DeleteForeverIcon sx={{ cursor: "pointer" }}
            variant="contained"
            color="primary"
            onClick={() => {
              deleteStudent(cellValues.row.id);
            }}
          >
          </DeleteForeverIcon>
        )
      }
    }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div className="Main-title">
        <h1 style={{ marginBottom: "20px" }}>Students</h1>
        <Divider variant="middle" />
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        <div style={{ flexGrow: 0.8, height: "100%" }}>
          <div>
            <Link className="link" style={{ display: 'flex', alignItems: "center", marginBottom: "10px" }} to={`/newstudent`}>
              <PersonAddIcon sx={{ fontSize: 40, mr: 2, ml: 1 }} />
            </Link>
          </div>
          <div style={{ height: "80%" }}>
            <DataGrid rows={rows} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
};


export default AllStudentsView;