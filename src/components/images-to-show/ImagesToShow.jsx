import { SingleImageToShow } from "../index";
import s from './ImagesToShow.module.scss';

export const ImagesToShow = ({ imagesToShow }) => {

    return (
        <>
            {
                imagesToShow.length !== 0 &&
                    <div className={s.imagesList}>
                        {
                            imagesToShow.map(image => <SingleImageToShow key={image.id} image={image}/>)
                        }
                    </div>
            }
        </>
    );
};
