export const SingleFoundImage = ({ image }) => {

    const { img_src } = image;

    return (
        <img style={{width: 200, height: 200, marginRight: 10}} src={img_src}/>
    );
};
