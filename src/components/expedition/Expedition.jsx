import { expeditionService } from '../../services/expedition';

import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, FormControl, Select, TextField, Button, CircularProgress } from '@material-ui/core';
import { ImageSearch } from '@material-ui/icons';
import {useEffect, useState} from "react";
import {FoundImages} from "../found-images/FoundImages";
import './Expedition.css'
import sp from "../../images/space4.jpg";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    }
}));
const postsPerPage = 10;
let arrayForHoldingPosts = [];

export const Expedition = () => {

    const classes = useStyles();

    const [values, setValues] = useState({
        rover: '',
        camera: '',
        sol: ''
    });
    const [spinner, setSpinner] = useState(false);
    const [foundImages, setFoundImages] = useState([]);
    const [imagesToShow, setImagesToShows] = useState([]);
    const [next, setNext] = useState(10);
    const [message, setMessage] = useState('');

    const rovers = ['curiosity', 'opportunity', 'spirit'];
    const cameras = [
        { abbreviation: 'fhaz', camera: 'Front Hazard Avoidance Camera' },
        { abbreviation: 'rhaz', camera: 'Rear Hazard Avoidance Camera' },
        { abbreviation: 'mast', camera: 'Mast Camera' },
        { abbreviation: 'chemcam', camera: 'Chemistry and Camera Complex' },
        { abbreviation: 'mahli', camera: 'Mars Hand Lens Imager' },
        { abbreviation: 'mardi', camera: 'Mars Descent Imager' },
        { abbreviation: 'navcam', camera: 'Navigation Camera' },
        { abbreviation: 'pancam', camera: 'Panoramic Camera' },
        { abbreviation: 'minites', camera: 'Miniature Thermal Emission Spectrometer (Mini-TES)' }
    ];

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const loadMarsImages = async () => {
        setMessage('');
        setSpinner(true);
        setFoundImages([]);
        setImagesToShows([]);
        setNext(10)

        const { rover, camera, sol } = values;

        const { photos } = await expeditionService.loadImages(rover, sol, camera);

        if (!photos.length) {
            setMessage('no found image, try to change options');
            return;
        }

        setFoundImages(photos);
        first(0, postsPerPage, photos);
    };

    const first = (start, end, photos) => {
        const slicedPosts = photos.slice(start, end);
        setImagesToShows(slicedPosts);
    };

    const loopWithSlice = (start, end) => {
        const slicedPosts = foundImages.slice(start, end);
        arrayForHoldingPosts = [...imagesToShow, ...slicedPosts];
        setImagesToShows(arrayForHoldingPosts);
    };

    const handleShowMorePosts = () => {
        loopWithSlice(next, next + postsPerPage);
        setNext(next + postsPerPage);
    };

    useEffect(() => {
        document.body.style.backgroundImage = `url(${sp})`;
        // document.body.style.backgroundColor = '#282c34';
        // document.body.style.backgroundImage = `url()`;
    }, [])

    return (
        <div>
            <h1> START YOUR EXPEDITION TO MARS </h1>

                <div style={{backgroundColor: "white", padding: 30, margin: '0 auto', width: 1300,
                    borderRadius: 20, textAlign: "center"}}>

                    <h2> select rover, camera and martian sol to show images </h2>
                    <div style={{
                        display: "flex", alignItems: "center", justifyContent: "center"}}>

                        <FormControl variant="filled" className={classes.formControl}>
                            <InputLabel htmlFor="filled-rover-native-simple">ROVER</InputLabel>
                            <Select
                                native
                                value={values.rover}
                                onChange={handleChange}
                                label="Rover"
                                inputProps={{
                                    name: 'rover',
                                    id: 'filled-rover-native-simple',
                                }}
                            >

                                <option aria-label="None" value="" />

                                {
                                    rovers.map((rover, i) => <option key={i} value={rover}> { rover } </option>)
                                }
                            </Select>
                        </FormControl>

                        <FormControl variant="filled" className={classes.formControl}>
                            <InputLabel htmlFor="filled-camera-native-simple">CAMERA</InputLabel>
                            <Select
                                native
                                value={values.camera}
                                onChange={handleChange}
                                label="Camera"
                                inputProps={{
                                    name: 'camera',
                                    id: 'filled-camera-native-simple',
                                }}
                            >

                                <option aria-label="None" value="" />

                                {
                                    cameras.map(({abbreviation,  camera}, i) => <option key={i} value={abbreviation}> { camera } </option>)
                                }
                            </Select>
                        </FormControl>

                        <FormControl className={classes.formControl}>
                            <TextField
                                id="filled-number"
                                label="MARTIAN SOL"
                                type="number"
                                onChange={handleChange}
                                inputProps={{
                                    name: 'sol',
                                    id: 'filled-sol-native-simple',
                                }}
                                variant="filled"
                            />
                        </FormControl>

                        <FormControl className={classes.formControl}>
                            <Button onClick={loadMarsImages}
                                    disabled={!(!!values.rover && !!values.camera && !!values.sol)}
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                // className={classes.button}
                                    endIcon={<ImageSearch />}
                            >
                                SEARCH
                            </Button>
                        </FormControl>
                    </div>

                    <div>
                        {
                            spinner && !imagesToShow.length && !message &&
                            <CircularProgress disableShrink />
                        }
                    </div>
                    <h3> { message } </h3>
                    <FoundImages  style={{margin: "0 auto"}}
                                  imagesToShow={imagesToShow}/>

                    <br/>

                    {
                        foundImages.length > imagesToShow.length &&
                        <button onClick={handleShowMorePosts}>Load more</button>
                    }
                </div>

        </div>
    );
};
