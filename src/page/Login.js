import React, {useState} from 'react';
import {Container, Grid, Typography, TextField, Button, Box} from '@material-ui/core';
import {createFetch} from "../hooks/createFetch";
import Auth from "../services/auth";

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (formDataField) => (e) => {
        setFormData({...formData, [formDataField]: e.target.value})
    }

    const loginFetch = createFetch(async () => {
        await Auth.login(formData)
    })

    const sendForm = async () => {
        loginFetch()
    }

    return (
        <Grid container alignItems='center' justifyContent='center' style={{height: '100vh'}}>
            <Container maxWidth='sm'>
                <Grid container direction='column' className='formContainer'>
                    <Typography variant="h4" component="h4" align='center'>Login</Typography>
                    <TextField required id="login" label="Login" onChange={changeHandler('email')}/>
                    <TextField required id="password" label="Password" onChange={changeHandler('password')}/>
                </Grid>
                <Box mt={3} onClick={sendForm}>
                    <Button variant="contained" color="primary">Login</Button>
                </Box>
            </Container>
        </Grid>
    );
};

export default Login;