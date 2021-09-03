import React from 'react';
import {Container, Grid, Typography, Box, Input} from '@material-ui/core';

const Login = () => {
    return (
        <Grid container alignItems='center' justifyContent='center' className='gridContainer'>
            <Container maxWidth='sm'>
                <Grid container direction='column'>
                    <Typography variant="h4" component="h4" align='center'>Login</Typography>
                    <Input placeholder='login' style={{marginTop: 20}} />
                    <Input placeholder='password' style={{marginTop: 20}}/>
                </Grid>
            </Container>
        </Grid>
    );
};

export default Login;