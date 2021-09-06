import React from 'react';
import {Container, Grid, Typography, Box, Input, TextField} from '@material-ui/core';

const Login = () => {
    return (
        <Grid container alignItems='center' justifyContent='center' style={{height: '100vh'}}>
            <Container maxWidth='sm'>
                <Grid container direction='column' className='formContainer'>
                    <Typography variant="h4" component="h4" align='center'>Login</Typography>
                    <TextField required id="login" label="Login" />
                    <TextField required id="password" label="Password" />
                </Grid>
            </Container>
        </Grid>
    );
};

export default Login;