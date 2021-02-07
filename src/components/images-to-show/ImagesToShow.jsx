import { SingleImageToShow } from "../index";
import s from './ImagesToShow.module.scss';

export const ImagesToShow = ({ imagesToShow }) => {

    return (
        <div className={s.imagesList}>
            {
                imagesToShow.map(image => <SingleImageToShow key={image.id} image={image}/>)
            }
        </div>
    );
};
