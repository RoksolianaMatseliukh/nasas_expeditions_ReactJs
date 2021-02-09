import { Button, CircularProgress, makeStyles } from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";

import { expeditionService } from '../../services';
import { IMAGES_PER_PAGE, SEARCH_MESSAGE } from '../../constants';
import { ImagesToShow, MaterialForm } from "../index";
import { setError } from "../../redux/actions";
import s from './MarsExpedition.module.scss';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    }
}));

export const MarsExpedition = ({ history }) => {

    const classes = useStyles();

    const { rover, camera, sol } = useSelector(({ setValuesToSearchReducer }) => setValuesToSearchReducer);
    const dispatch = useDispatch();

    const [imagesToShow, setImagesToShow] = useState([]);

    const [spinner, setSpinner] = useState(false);
    const [page, setPage] = useState(1);
    const [message, setMessage] = useState('');
    const [isLoadMoreBtnVisible, setIsLoadMoreBtnVisible] = useState(false);

    useEffect(() => {
        dispatch(setError(false));
    }, []);

    const resetState = () => {
        setMessage('');
        setSpinner(true);
        setImagesToShow([]);
    };

    const loadMarsImages = async () => {
        try {
            resetState();

            const { photos } = await expeditionService.loadImages(rover, sol, camera, 1);

            if (!photos.length) {
                setMessage(SEARCH_MESSAGE);
                return;
            }

            setIsLoadMoreBtnVisible(true);
            setImagesToShow(photos);
            setPage(2);
        } catch (e) {
            dispatch(setError(true));
            history.push('/');
        }
    };

    const handleLoadMoreImages = async () => {
        try {
            const { photos } = await expeditionService.loadImages(rover, sol, camera, page);

            if (!photos.length) {
                setIsLoadMoreBtnVisible(false);
                return;
            }

            const arrayForHoldingImages = [...imagesToShow, ...photos];

            setImagesToShow(arrayForHoldingImages);
            setPage(prevValue => ++prevValue);
        } catch (e) {
            dispatch(setError(true));
            history.push('/');
        }
    };

    const toggleButtonLoadMore = () => {
        if (isLoadMoreBtnVisible && imagesToShow.length >= IMAGES_PER_PAGE) {
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
        if (imagesToShow.length >= IMAGES_PER_PAGE) {
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
