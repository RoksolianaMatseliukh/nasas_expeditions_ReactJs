import s from "./SibgleFoundImage.module.css";

export const SingleFoundImage = ({ image }) => {

    const { img_src } = image;

    return (
        <img className={s.mars_img} src={img_src}/>
    );
};
