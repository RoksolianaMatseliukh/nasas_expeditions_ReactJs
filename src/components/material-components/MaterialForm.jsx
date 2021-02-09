import { Button, FormControl, InputLabel, TextField, makeStyles } from "@material-ui/core";
import { ImageSearch } from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";

import { CAMERAS, ROVERS } from "../../constants";
import { MaterialSelect } from "../index";
import { setValuesToSearch } from "../../redux/actions";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    }
}));

export const MaterialForm = ({ loadMarsImages }) => {

    const classes = useStyles();

    const { rover, camera, sol } = useSelector(({ setValuesToSearchReducer }) => setValuesToSearchReducer);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setValuesToSearch(event));
    };

    return (
        <>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="filled-native-simple">ROVER</InputLabel>

                <MaterialSelect value={rover}
                    handleChange={handleChange}
                    label="Rover"
                    name="rover"
                    array={ROVERS}/>
            </FormControl>

            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="filled-native-simple">CAMERA</InputLabel>

                <MaterialSelect value={camera}
                    handleChange={handleChange}
                    label="Camera"
                    name="camera"
                    array={CAMERAS}/>
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
                <Button onClick={loadMarsImages}
                        disabled={!(rover && camera && sol)}
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
