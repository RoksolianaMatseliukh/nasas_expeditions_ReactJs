import s from './NotFound.module.scss';
import notFound from '../../images/404-error-page-not-found.jpg'

export const NotFound = () => {

    return (
        <div className={s.notFound}>
            <img src={notFound} alt="not found page"/>
        </div>
    );
};
