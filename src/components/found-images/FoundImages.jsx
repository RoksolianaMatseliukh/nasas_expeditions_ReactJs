import {SingleFoundImage} from "./single-found-image/SingleFoundImage";

export const FoundImages = ({ imagesToShow }) => {
    return (
        <>
            {
                imagesToShow.map(image => <SingleFoundImage key={image.id} image={image}/>)
            }
        </>
    );
};
