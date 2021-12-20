import { Divider, TextField, Typography, Box, Button, Stack } from "@mui/material"

const EditCampusView = (props) => {
    const { handleSubmit, handleChange, campus } = props;
    const style = {
        display: "flex",
        margin: "auto",
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: "10px",
        p: 4,
    };
    return (
        <Box>
            <div className="Main-title">
                <Typography variant="h4" style={{ marginBottom: "10px" }}>Edit Campus: Campus Name</Typography>
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
                            id="name"
                            name="name"
                            label="Campus Name"
                            placeholder={campus.name}
                            onChange={(e) => handleChange(e)}
                        />
                    </Box>
                    <Box display="flex">
                        <TextField
                            sx={{ flex: 1 }}
                            required
                            id="address"
                            name="address"
                            label="Adress"
                            placeholder={campus.address}
                            onChange={(e) => handleChange(e)}
                        />
                    </Box>
                    <Box display="flex">
                        <TextField
                            multiline
                            rows={4}
                            sx={{ flex: 1 }}
                            id="description"
                            name="description"
                            label="Description"
                            placeholder={campus.description}
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

export default EditCampusView;