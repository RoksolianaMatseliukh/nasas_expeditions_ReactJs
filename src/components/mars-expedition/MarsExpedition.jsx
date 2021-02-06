import { CircularProgress } from '@material-ui/core';
import { useState } from "react";

import { expeditionService } from '../../services/expedition';
import { imagePerPage, searchMessage } from '../../constants';
import { ImagesToShow } from "../images-to-show/ImagesToShow";
import { MaterialForm } from "../material-components/MaterialForm";
import s from './MarsExpedition.module.css'

export const MarsExpedition = () => {

    const [spinner, setSpinner] = useState(false);
    const [foundImages, setFoundImages] = useState([]);
    const [imagesToShow, setImagesToShows] = useState([]);
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
        resetState();

        const { rover, camera, sol } = values;

        const { photos } = await expeditionService.loadImages(rover, sol, camera);

        if (!photos.length) {
            setMessage(searchMessage);
            return;
        }

        setFoundImages(photos);

        const slicedImages = photos.slice(0, imagePerPage);
        setImagesToShows(slicedImages);
    };

    const loopWithSlice = (start, end) => {
        const slicedImages = foundImages.slice(start, end);
        const arrayForHoldingImages = [...imagesToShow, ...slicedImages];
        setImagesToShows(arrayForHoldingImages);
    };

    const handleLoadMoreImages = () => {
        loopWithSlice(next, next + imagePerPage);
        setNext(next + imagePerPage);
    };

    const toggleButtonLoadMore = () => {
        if (foundImages.length > imagesToShow.length) {
            return (
                <>
                    <button onClick={handleLoadMoreImages}>Load more</button>
                    <a href="#top">Back to top</a>
                </>
            );
        }
    };

    const toggleSpinner = () => {
        if (spinner && !imagesToShow.length && !message) {
            return <CircularProgress disableShrink />;
        }
    };

    return (
        <div className={s.marsExpeditionWrapper} id="top">
            <div className={s.marsExpedition}>
                <h2> select rover, camera and martian sol to show images </h2>

                <div className={s.materialFormWrapper}>
                    <MaterialForm loadMarsImages={loadMarsImages}/>
                </div>

                { toggleSpinner() }

                <h3> { message } </h3>

                <ImagesToShow imagesToShow={imagesToShow}/>

                { toggleButtonLoadMore() }
            </div>
        </div>
    );
};
