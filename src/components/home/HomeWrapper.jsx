import { useSelector } from "react-redux";

import { Home, Error } from '../index';

export const HomeWrapper = () => {

    const error = useSelector(({ errorReducer: { isError } }) => isError);

    const errorChecker = () => {
        if (error) {
            return <Error/>;
        }

        return <Home/>;
    };

    return errorChecker();
};
