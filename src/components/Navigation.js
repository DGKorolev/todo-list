import React from 'react';
import {Link} from "react-router-dom";
import {AppBar, Button, makeStyles, Toolbar, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navigation = () => {
    const classes = useStyles();

    return (
        <AppBar position="fixed">
            <Toolbar>
                <div className={classes.title}>
                    <Link to="/">
                        <Typography variant="h6">
                            Tasks
                        </Typography>
                    </Link>
                </div>

                <div>
                    <Link to="/login">
                        <Button color="inherit">Login</Button>
                    </Link>
                    <Link to="/registration">
                        <Button color="inherit">Registration</Button>
                    </Link>
                </div>

            </Toolbar>
        </AppBar>
    );
};

export default Navigation;