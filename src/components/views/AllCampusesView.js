import PropTypes from "prop-types";
import { useState } from 'react'
import { Grid, CardContent, Card, Typography, Divider, Box, IconButton, Button } from "@mui/material"

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import NewCampusContainer from "../containers/NewCampusContainer";


const AllCampusesView = (props) => {

  const { deleteCampus } = props;

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  if (!props.allCampuses.length) {
    return (
      <div>
        <div className="Main-title">
          <h1 style={{ marginBottom: "20px" }}>All Campuses</h1>
          <Divider variant="middle" />
        </div>
        <div className="Main-content">
          There are no campuses.
        </div>
        <div onClick={handleOpen} className="link" style={{ marginTop: "20px" }}>
          <Button variant="contained" color="primary">Add Campus</Button>
        </div>
        <NewCampusContainer 
            open={open}
            handleClose={handleClose}
          />
      </div>

    )
  }
  return (
    <div>
      <div className="Main-title">
        <h1 style={{ marginBottom: "20px" }}>All Campuses</h1>
        <Divider variant="middle" />
      </div>
      <div className="Main-content">
        <div onClick={handleOpen} className="link" style={{ display: 'flex', alignItems: "center", marginBottom: "20px" }}>
          <AddCircleOutlineOutlinedIcon sx={{ fontSize: 20, mr: 1, ml: 2 }} />
          <h4>Add Campus</h4>
        </div>
        <Grid container justifyContent="start" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {props.allCampuses.map((campus) => (
            <Grid item xs={2} sm={4} md={4} key={campus.id}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ fontSize: 14, flex: 1 }} color="text.secondary" gutterBottom>
                      Campus
                    </Typography>
                    <IconButton onClick={() => deleteCampus(campus.id)} aria-label="delete">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => deleteCampus(campus.id)} aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                  <Link className="link" to={`/campus/${campus.id}`}>
                    <Typography variant="h5" component="div">
                      {campus.name}
                    </Typography>
                    <Typography sx={{ pt: 1.5 }} color="text.secondary">
                      Number of Students:
                    </Typography>
                    <Typography variant="body2">
                      {campus.students ? campus.students.length : "0"}
                    </Typography>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
          <NewCampusContainer 
            open={open}
            handleClose={handleClose}
          />
    </div>


  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;