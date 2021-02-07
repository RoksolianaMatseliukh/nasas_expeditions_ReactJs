import { Button, CircularProgress, makeStyles } from '@material-ui/core';
import { useState } from "react";

import { expeditionService } from '../../services';
import { IMAGES_PER_PAGE, SEARCH_MESSAGE } from '../../constants';
import { ImagesToShow, MaterialForm } from "../index";
import s from './MarsExpedition.module.scss'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export const MarsExpedition = ({ history }) => {

    const classes = useStyles();

    const [foundImages, setFoundImages] = useState([]);
    const [imagesToShow, setImagesToShows] = useState([]);

    const [spinner, setSpinner] = useState(false);
    const [next, setNext] = useState(10);
    const [message, setMessage] = useState('');

    const resetState = () => {
        setMessage('');
        setSpinner(true);
        setFoundImages([]);
        setImagesToShows([]);
        setNext(10);
    };

    const loadMarsImages = async (values) => {
        try {
            resetState();

            const { rover, camera, sol } = values;

            const { photos } = await expeditionService.loadImages(history, rover, sol, camera);

            if (!photos.length) {
                setMessage(SEARCH_MESSAGE);
                return;
            }

            setFoundImages(photos);

            const slicedImages = photos.slice(0, IMAGES_PER_PAGE);
            setImagesToShows(slicedImages);
        } catch (e) {
            history.push('/error');
        }
    };

    const loopWithSlice = (start, end) => {
        const slicedImages = foundImages.slice(start, end);
        const arrayForHoldingImages = [...imagesToShow, ...slicedImages];
        setImagesToShows(arrayForHoldingImages);
    };

    const handleLoadMoreImages = () => {
        loopWithSlice(next, next + IMAGES_PER_PAGE);
        setNext(next + IMAGES_PER_PAGE);
    };

    const toggleButtonLoadMore = () => {
        if (foundImages.length > imagesToShow.length) {
            return (
                <Button onClick={handleLoadMoreImages}
                        variant="contained"
                        color="primary"
                        size="medium"
                        className={classes.button}>
                    LOAD MORE...
                </Button>
            );
        }
    };

    const toggleButtonBackToTop = () => {
        if (imagesToShow.length > IMAGES_PER_PAGE) {
            return (
                <Button variant="contained"
                        color="primary"
                        size="medium"
                        href="#top"
                        className={classes.button}>
                    BACK TO TOP
                </Button>
            );
        }
    };

    const toggleSpinner = () => {
        if (spinner && !imagesToShow.length && !message) {
            return <CircularProgress className={s.spinner} disableShrink />;
        }
    };

    return (
        <div className={s.marsExpeditionWrapper} id="top">
            <div className={s.marsExpedition}>
                <h1 className={s.paragraph}>
                    select rover, camera and martian sol to show images
                </h1>

                <div className={s.materialFormWrapper}>
                    <MaterialForm loadMarsImages={loadMarsImages}/>
                </div>

                { toggleSpinner() }

                <h2> { message } </h2>

                <ImagesToShow imagesToShow={imagesToShow}/>

                <div className={s.buttonsWrapper}>
                    { toggleButtonLoadMore() }

                    { toggleButtonBackToTop() }
                </div>
            </div>
        </div>
    );
};
