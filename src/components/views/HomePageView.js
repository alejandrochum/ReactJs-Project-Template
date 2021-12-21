import { Box, Typography, Button, Card, CardContent, CardActions } from '@mui/material';

import { Link } from 'react-router-dom';

const HomePageView = (props) => {
  const { campuses, students } = props;
  return (

    <Box display="flex" alignItems="center" sx={{ p: "80px", flexDirection: "column" }}>
      <Typography variant="h3" sx={{ mb: 1 }}>Student-Campus Manager</Typography>
      <Typography variant="h4" sx={{ mx: "auto", mb: 5 }}>Welcome</Typography>
      <Box >
        <Card sx={{ minWidth: 275, maxWidth: 500, mb: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Campuses
            </Typography>
            <Typography variant="h5" component="div">
              {campuses.length}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Campuses on Database
            </Typography>
          </CardContent>
          <CardActions>
            <Link className='link' style={{ color: "#1e88e5" }} to={'/campuses'}>
              <Button size="small">
                Go to Campuses
              </Button>
            </Link>
          </CardActions>
        </Card>

        <Card sx={{ minWidth: 275, maxWidth: 500 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Students
            </Typography>
            <Typography variant="h5" component="div">
              {students.length}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Students Registered
            </Typography>
          </CardContent>
          <CardActions>
            <Link className='link' style={{ color: "#1e88e5" }} to={'/students'}>
              <Button size="small">Go to Students</Button>
            </Link>
          </CardActions>
        </Card>
      </Box>

    </Box>

  );
}




export default HomePageView;
