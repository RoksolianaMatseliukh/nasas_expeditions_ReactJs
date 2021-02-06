import { Button, makeStyles } from "@material-ui/core";

import s from './Error.module.scss';
import somethingWentWrong from '../../images/something-went-wrong.jpg'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export const Error = ({ history }) => {

    const classes = useStyles();

    return (
        <div className={s.error}>
            <img src={somethingWentWrong} alt="something went wrong"/>

            <Button onClick={() => history.goBack()}
                    variant="contained"
                    color="primary"
                    size="medium"
                    className={classes.button}>
                RETRY
            </Button>
        </div>
    );
};
