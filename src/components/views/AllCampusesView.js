import PropTypes from "prop-types";
import { useState } from 'react'
import { Grid, CardContent, Card, Typography, Divider, Box, IconButton, Button, CardMedia } from "@mui/material"

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
        <Button onClick={handleOpen} variant="outlined" sx={{ marginTop: "10px" }} startIcon={<AddCircleOutlineOutlinedIcon />}>
          Add new campus
        </Button>
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
        <Button onClick={handleOpen} sx={{ marginTop: "10px", marginBottom: "10px" }} startIcon={<AddCircleOutlineOutlinedIcon />}>
          Add new campus
        </Button>

        <Grid container justifyContent="start" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {props.allCampuses.map((campus) => (
            <Grid item xs={2} sm={4} md={4} key={campus.id}>
              <Card sx={{ minWidth: 275 }}>
                <CardMedia
                  component="img"
                  alt="Campus Image"
                  height="200"
                  image={campus.imageURL}
                />
                <CardContent>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ fontSize: 14, flex: 1 }} color="text.secondary" gutterBottom>
                      Campus
                    </Typography>
                    <Link to={`/editcampus/${campus.id}`}>
                      <IconButton variant="inherit" underline="none" aria-label="delete">
                        <EditIcon />
                      </IconButton>
                    </Link>

                    <IconButton onClick={() => deleteCampus(campus.id)} aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                  <Link variant="inherit" className="link" to={`/campus/${campus.id}`}>
                    <Typography variant="h5" color="text.primary" component="div">
                      {campus.name}
                    </Typography>
                    <Typography sx={{ pt: 1.5 }} color="text.secondary">
                      Number of Students:
                    </Typography>
                    <Typography variant="body2" color="text.primary">
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