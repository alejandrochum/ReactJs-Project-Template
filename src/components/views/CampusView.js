import { useState } from 'react'
import { Divider, Stack } from "@mui/material"
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';

import { Modal, Button, Box, TextField, IconButton } from '@mui/material';

import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const CampusView = (props) => {
  const { campus, students, deleteStudent, handleChange, handleSubmit, handleDeleteCampus } = props;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let checkStudents = () => {
    if (students.length > 0) {
      return <DataGrid rows={rows} columns={columns} />
    } else {
      return "No students registered at this campus..."
    }
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid rgba(0, 0, 0, 0.3)',
    borderRadius: "10px",
    p: 4,
  };

  let rows = students.map(student => {
    return {
      id: student.id, col1: student.firstname, col2: student.lastname
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
    {
      field: 'col3', headerName: 'Delete', flex: 1, headerAlign: "center", align: 'center', renderCell: (cellValues) => {
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
        <Stack direction="row">
          <h1 style={{ margin: "0px 10px 10px 0px" }}>{campus.name}</h1>
          <Link to={`/editcampus/${campus.id}`} style={{ margin: "auto 0" }} className="link">
            <IconButton>
              <EditIcon fontSize="small" />
            </IconButton>
          </Link>
          <IconButton style={{ margin: "auto 0" }} onClick={() => handleDeleteCampus(campus.id)} className="link">
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Stack>
        <Divider variant="middle" />
        <div style={{ marginTop: "10px" }}>
          <h4>{campus.address}</h4>
          <div>{campus.description}</div>
        </div>

      </div>

      <div>
        <div style={{ padding: "0px 20px 40px 20px" }}>
          <Box display="flex">
            <h3 style={{ flex: 1, marginBottom: "10px", fontSize: 18 }}>Students</h3>
            <Button sx={{marginBottom: "10px"}} onClick={handleOpen} startIcon={<PersonAddIcon />}>
              Add Student
            </Button>
          </Box>
          <div style={{ height: "500px" }}>
            {checkStudents()}
          </div>
        </div>


        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div style={{ flex: 1, height: "100%", margin: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <PersonAddIcon sx={{ mr: 1 }} />
                <h3 style={{ fontSize: 18 }}>Add Student to {campus.name}</h3>
              </div>
              <div style={{}}>
                <Box component="form"
                  onSubmit={(e) => {
                    handleSubmit(e)
                    handleClose()
                  }}
                  sx={{ '& .MuiTextField-root': { m: 1 } }}
                  autoComplete="off">
                  <Box display="flex">
                    <TextField
                      sx={{ flex: 1 }}
                      required
                      id="firstname"
                      name="firstname"
                      label="First Name"
                      placeholder='First Name'
                      onChange={(e) => handleChange(e)}
                    />
                    <TextField
                      sx={{ flex: 1 }}
                      required
                      id="lastname"
                      name="lastname"
                      label="Last Name"
                      placeholder='Last Name'
                      onChange={(e) => handleChange(e)}
                    />
                  </Box>
                  <Box display="flex">
                    <TextField
                      sx={{ flex: 1 }}
                      required
                      id="email"
                      name="email"
                      label="Email"
                      placeholder='Email'
                      type="email"
                      onChange={(e) => handleChange(e)}
                    />
                  </Box>
                  <Box display="flex">
                    <TextField
                      sx={{ flex: 1 }}
                      id="gpa"
                      name="gpa"
                      label="GPA"
                      type="number"
                      InputProps={{ inputProps: { min: 0, max: 4 } }}
                      onChange={(e) => handleChange(e)}
                    />
                  </Box>
                  <Box display="flex">
                    <TextField
                      sx={{ flex: 1 }}
                      disabled
                      id="campus"
                      label={campus.name}
                      defaultValue={campus.name}
                    />
                  </Box>
                  <br />
                  <Button style={{ width: "200px", marginLeft: "5px" }} variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                </Box>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );

};

export default CampusView;