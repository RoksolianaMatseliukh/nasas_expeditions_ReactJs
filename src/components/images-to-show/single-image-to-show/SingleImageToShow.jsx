import s from "./SingleImageToShow.module.scss";

export const SingleImageToShow = ({ image: { img_src, id } }) => <img className={s.mars_img} src={img_src} alt={id}/>;
