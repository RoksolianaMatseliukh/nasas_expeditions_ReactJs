import {SingleFoundImage} from "./single-found-image/SingleFoundImage";

export const FoundImages = ({ imagesToShow }) => {
    return (
        <>
            {
                imagesToShow.length &&

                <div>
                            {
                                imagesToShow.map(image => <SingleFoundImage key={image.id} image={image}/>)
                            }
                </div>
            }
        </>
    );
};
