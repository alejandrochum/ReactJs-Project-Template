import { Button, Typography, Box, TextField, Autocomplete, Divider } from "@mui/material";

const NewStudentView = (props) => {
  const { handleChange, handleSubmit, campuses } = props;

  const allCampuses = campuses.map(campus => {
    return {
      label: campus.name, id: campus.id
    }
  })

  return (
    <div>
      <div className="Main-title">
        <Typography variant="h4" style={{ marginBottom: "10px" }}>New Student</Typography>
        <Divider variant="middle" />
      </div>
      <Box display="flex" height="100%" justifyContent="center">
        <Box component="form"
          onSubmit={(e) => handleSubmit(e)}
          border={"1px solid rgba(0, 0, 0, 0.3)"}
          borderRadius={3}
          padding={3}
          width={700}
          maxWidth={700}
          justifyContent="center"
          alignItems="center"
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
            <Autocomplete
              sx={{ flex: 2 }}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              disablePortal
              id="campusName"
              name="campusName"
              options={allCampuses}
              renderInput={(params) => <TextField {...params} label="Campus" />}
              onChange={(event, newValue) => {
                event.preventDefault()
                event = {
                  target: {
                    name: 'campusId',
                    value: newValue ? newValue.id : null
                  }
                }
                handleChange(event)
              }}
            />
            <TextField
              sx={{ flex: 0.8 }}
              id="gpa"
              name="gpa"
              label="GPA"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 4 } }}
              onChange={(e) => handleChange(e)}
            />
          </Box>
          <br />

          <Button style={{ width: "200px", marginLeft: "5px" }} variant="contained" color="primary" type="submit">
            Submit
          </Button>

        </Box>
      </Box>
    </div>



    // <div className={classes.root}>
    //   <div className={classes.formContainer}>
    //     <div className={classes.formTitle}>
    //       <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
    //         New Student
    //       </Typography>
    //     </div>
    //     <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
    //       <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
    //       <input type="text" name="firstname" onChange ={(e) => handleChange(e)} />
    //       <br/>
    //       <br/>

    //       <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
    //       <input type="text" name="lastname" onChange={(e) => handleChange(e)} />
    //       <br/>
    //       <br/>

    //       <label style={{color:'#11153e', fontWeight: 'bold'}}>campusId: </label>
    //       <input type="text" name="campusId" onChange={(e) => handleChange(e)} />
    //       <br/>
    //       <br/>

    //       <Button variant="contained" color="primary" type="submit">
    //         Submit
    //       </Button>
    //       <br/>
    //       <br/>
    //     </form>
    //     </div>
    //   </div>

  )
}

export default NewStudentView;