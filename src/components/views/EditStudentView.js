import { Divider, TextField, Typography, Box, Button, Stack, Autocomplete } from "@mui/material"

const EditStudentView = (props) => {
    const { handleSubmit, handleChange, student, campuses } = props;
    const style = {
        display: "flex",
        margin: "auto",
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: "10px",
        p: 4,
    };

    const allCampuses = campuses.map(campus => {
        return {
            label: campus.name, id: campus.id
        }
    })
    return (
        <Box>
            <div className="Main-title">
                <Typography variant="h4" style={{ marginBottom: "10px" }}>Edit Student: {student.firstname + " " + student.lastname}</Typography>
                <Divider variant="middle" />
            </div>
            <Box sx={style}>
                <Box component="form"
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                    border={"1px solid rgba(0, 0, 0, 0.3)"}
                    borderRadius={3}
                    padding={3}
                    width={700}
                    maxWidth={700}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ '& .MuiTextField-root': { m: 1 } }}
                    autoComplete="off"
                >
                    <Box display="flex">
                        <TextField
                            sx={{ flex: 1 }}
                            required
                            id="firstname"
                            name="firstname"
                            label="First Name"
                            placeholder={student.firstname}
                            onChange={(e) => handleChange(e)}
                        />
                        <TextField
                            sx={{ flex: 1 }}
                            required
                            id="lastname"
                            name="lastname"
                            label="Last Name"
                            placeholder={student.lastname}
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
                            placeholder={student.email}
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
                            placeholder={student.gpa}
                            type="number"
                            InputProps={{ inputProps: { min: 0, max: 4 } }}
                            onChange={(e) => handleChange(e)}
                        />

                    </Box>

                    <br />

                    <Stack direction="row">
                        <Button style={{ width: "200px", marginLeft: "5px" }} variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                        <Button style={{ width: "200px", marginLeft: "5px" }} variant="outlined" color="primary">
                            Cancel
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

export default EditStudentView;