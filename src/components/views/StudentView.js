import Card from '@mui/material/Card';
import { Divider } from "@mui/material"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student, handleDelete } = props;

  const linkToCampus = () => {
    if (student.campus) {
      return (
        <Link className='link' to={`/campus/${student.campus.id}`} >
          <Typography variant="body2">
            {(student.campus.name)}
          </Typography>
        </Link>
      )
    }
    else return "Student is not enrolled in a campus"
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ mt: 10, flexShrink: 0.9, flexGrow: 0.5 }}>
        <CardMedia
          component="img"
          style={{ objectFit: "scale-down" }}
          alt="Student Image"
          height="140"
          image={student.imageURL}
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Student
          </Typography>
          <Typography variant="h5" component="div">
            {student ? student.firstname + " " + student.lastname : ""}
            <Divider sx={{ pt: 1 }} variant="middle" />
          </Typography>
          <Typography sx={{ pt: 4 }} color="text.secondary">
            Email
          </Typography>
          {student.email}
          <Typography sx={{ pt: 1 }} color="text.secondary">
            GPA
          </Typography>
          {student.gpa ? student.gpa : "Student does not have a GPA score"}

          <Typography sx={{ pt: 1 }} color="text.secondary">
            Campus
          </Typography>
          {linkToCampus()}

        </CardContent>
        <CardActions>
          <Button href={`/editstudent/${student.id}`} size="small">Edit Student</Button>
          <Button size="small" onClick={() => {
            handleDelete();
          }}>Delete Student</Button>
        </CardActions>
      </Card>
    </div>
  );

  // <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
  //   <h1>{student.firstname + " " + student.lastname}</h1>
  //   <h3>{student.campus.name}</h3>
  // </div>

};

export default StudentView;