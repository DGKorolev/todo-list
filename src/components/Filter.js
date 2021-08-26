import React from 'react';
import {ALL, DONE, UNDONE} from "../App";
import {Box, Button, Grid, IconButton, Typography} from "@material-ui/core";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const Filter = ({setFilter}) => {

    const handlerFilterButton = (filterType) => {
        return () => setFilter(state => ({...state, filterType}))
    }

    const handlerSortButton = (ascending) => {
        return () => setFilter(state => ({...state, sortDirection: ascending}))
    }

    return (
        <Box mt={2}>
            <Grid container justifyContent="space-between" alignItems="center" >
                <Box>
                    <Button onClick={handlerFilterButton(ALL)} size="small">
                        All
                    </Button>
                    <Button onClick={handlerFilterButton(DONE)}>
                        Done
                    </Button>
                    <Button onClick={handlerFilterButton(UNDONE)}>
                        Undone
                    </Button>
                </Box>
                <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                    <Typography display="inline">Sort by Date</Typography>
                    <IconButton
                        onClick={handlerSortButton(true)}
                    >
                        <ArrowUpwardIcon/>
                    </IconButton>
                    <IconButton
                        onClick={handlerSortButton(false)}
                    >
                        <ArrowDownwardIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Filter;