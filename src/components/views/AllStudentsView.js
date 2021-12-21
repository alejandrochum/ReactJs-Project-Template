import { DataGrid } from '@mui/x-data-grid';
import { Divider, IconButton, Button } from "@mui/material"

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

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
        <Button href={`/newstudent`} variant="outlined" startIcon={<PersonAddIcon />}>
          Add a new student
        </Button>

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
          <IconButton href={`/student/${cellValues.row.id}`}>
              <InfoOutlinedIcon
                color="primary"
              >
              </InfoOutlinedIcon>
          </IconButton>
        )
      }
    },
    { field: 'col1', headerName: 'First Name', width: 250 },
    { field: 'col2', headerName: 'Last Name', width: 250 },
    { field: 'col3', headerName: 'Campus', width: 250 },
    {
      field: 'col4', headerName: 'Edit', flex: 1, headerAlign: "center", align: 'center', renderCell: (cellValues) => {
        return (
          <IconButton href={`/editstudent/${cellValues.row.id}`}>
            <EditIcon>
            </EditIcon>
          </IconButton>
        )
      }
    },
    {
      field: 'col5', headerName: 'Delete', flex: 1, headerAlign: "center", align: 'center', renderCell: (cellValues) => {
        return (
          <IconButton color="error">
            <DeleteForeverIcon
              onClick={() => {
                deleteStudent(cellValues.row.id);
              }}
            >
            </DeleteForeverIcon>
          </IconButton>
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
            <IconButton href={'/newstudent'} sx={{ marginBottom: "10px" }} >
              <PersonAddIcon />
            </IconButton>
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