import React from 'react';
import {Box, Button, Grid, IconButton, Typography} from "@material-ui/core";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export const ALL = 'all'
export const DONE = 'done'
export const UNDONE = 'undone'

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
                    <Button onClick={handlerFilterButton(ALL)}>
                        All
                    </Button>
                    <Button onClick={handlerFilterButton(DONE)}>
                        Done
                    </Button>
                    <Button onClick={handlerFilterButton(UNDONE)}>
                        Undone
                    </Button>
                </Box>
                <Box>
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
                </Box>
            </Grid>
        </Box>
    );
};

export default Filter;