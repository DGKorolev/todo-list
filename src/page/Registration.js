import React, {useState} from 'react';
import {Box, Button, Container, Grid, TextField, Typography} from "@material-ui/core";
import Auth from '../services/auth'


const Registration = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (formDataField) => (e) => {
        setFormData({...formData, [formDataField]: e.target.value})
    }

    const sendForm = async () => {
        const user = await Auth.registration(formData)
        console.log(user)
    }

    return (
        <Grid container alignItems='center' justifyContent='center' style={{height: '100vh'}}>
            <Container maxWidth='sm'>
                <Grid container direction='column' className='formContainer' alignItem='center'>
                    <Typography variant="h4" component="h4" align='center'>Login</Typography>
                    <TextField required id="login" label="Login" onChange={changeHandler('email')}/>
                    <TextField required id="password" label="Password" onChange={changeHandler('password')}/>
                </Grid>
                <Box mt={3} onClick={sendForm}>
                    <Button variant="contained" color="primary">Registration</Button>
                </Box>
            </Container>
        </Grid>
    );
};

export default Registration;