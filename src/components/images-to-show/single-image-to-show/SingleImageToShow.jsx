import s from "./SingleImageToShow.module.css";

export const SingleImageToShow = ({ image: { img_src, id } }) => <img className={s.mars_img} src={img_src} alt={id}/>;
