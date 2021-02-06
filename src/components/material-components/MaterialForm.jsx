import { Button, FormControl, InputLabel, TextField, makeStyles } from "@material-ui/core";
import { ImageSearch } from "@material-ui/icons";
import { useState } from "react";

import { cameras, rovers } from "../../constants";
import { MaterialSelect } from "./MaterialSelect";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    }
}));

export const MaterialForm = ({ loadMarsImages }) => {

    const classes = useStyles();

    const [values, setValues] = useState({
        rover: '',
        camera: '',
        sol: ''
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="filled-native-simple">ROVER</InputLabel>

                <MaterialSelect value={values.rover}
                    handleChange={handleChange}
                    label="Rover"
                    name="rover"
                    array={rovers}/>
            </FormControl>

            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="filled-native-simple">CAMERA</InputLabel>

                <MaterialSelect value={values.camera}
                    handleChange={handleChange}
                    label="Camera"
                    name="camera"
                    array={cameras}/>
            </FormControl>

            <FormControl className={classes.formControl}>
                <TextField id="filled-number"
                    label="MARTIAN SOL"
                    type="number"
                    onChange={handleChange}
                    inputProps={{
                        name: 'sol',
                        id: 'filled-native-simple',
                    }}
                    variant="filled"/>
            </FormControl>

            <FormControl className={classes.formControl}>
                <Button onClick={() => loadMarsImages(values)}
                        disabled={!(!!values.rover && !!values.camera && !!values.sol)}
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={<ImageSearch />}>
                    SEARCH
                </Button>
            </FormControl>
        </>
    );
};
