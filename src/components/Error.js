import React, {useEffect} from 'react';
import {Box, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    error: {
        display: 'block',
        textAlign: "center",
        background: theme.palette.error.light,
        borderRadius: '5px',
        padding: '8px 24px',
    }
}))

const Error = ({children, time}) => {

    const classes = useStyles()

    useEffect(() => {

        setTimeout(() => {
            // setError('')
        }, time)

    }, )

    return (
        <Box p={1}>
            <Typography component={'span'} className={classes.error}>{children}</Typography>
        </Box>
    );
};

export default Error;