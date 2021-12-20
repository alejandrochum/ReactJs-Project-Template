import Button from '@material-ui/core/Button';
import { Divider, Modal, TextField, Typography, Box } from "@mui/material"

const NewCampusView = (props) => {
    const { handleChange, handleSubmit, open, handleClose } = props;
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
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className="Main-title">
                    <Typography variant="h4" style={{ marginBottom: "10px" }}>New Campus</Typography>
                    <Divider variant="middle" />
                </div>
                <Box display="flex" height="100%" justifyContent="center">
                    <Box component="form"
                        onSubmit={(e) => {
                            handleSubmit(e);
                            handleClose()
                        }}
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
                                id="name"
                                name="name"
                                label="Campus Name"
                                placeholder='Campus Name'
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
                                placeholder='Adress'
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
            </Box>
        </Modal>
    )
}

export default NewCampusView;