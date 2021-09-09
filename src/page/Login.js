import React, {useState} from 'react';
import {Container, Grid, Typography, TextField, Button, Box} from '@material-ui/core';
import {createFetch} from "../hooks/createFetch";
import Auth from "../services/auth";
import * as yup from "yup";
import {Formik} from "formik";
import {Redirect} from "react-router-dom";

const Login = ({login, ...props}) => {

    const [redirect, setRedirect] = useState(false)

    const validationSchema = yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required(),
    })


    const registrationFetch = createFetch(async (values) => {

        const res = await Auth.login(values)

        if (!res.jwtToken) return

        setRedirect(true)
        login(res.jwtToken)
    })

    if (redirect) {
        return (<Redirect to="/"/>)
    }

    return (
        <Grid container alignItems='center' justifyContent='center' style={{height: '100vh'}}>
            <Container maxWidth='sm'>

                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                        registrationFetch(values)
                    }}
                    validationSchema={validationSchema}
                    validateOnBlur
                >
                    {(
                        {
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            isValid,
                            handleSubmit,
                            dirty,
                            isSubmitting
                        }) => (
                        <>
                            <form>
                                <Grid container direction='column' className='formContainer'>
                                    <Typography variant="h4" component="h4" align='center'>Login</Typography>
                                    <TextField
                                        name='email'
                                        label='Login'
                                        type='text'
                                        utocomplete="username email"
                                        error={!!(touched.email && errors.email)}
                                        helperText={touched.email && errors.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    <TextField
                                        name='password'
                                        label='Password'
                                        type='text'
                                        utocomplete="password"
                                        error={!!(touched.password && errors.password)}
                                        helperText={touched.password && errors.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                </Grid>
                                <Box mt={3}>
                                    <Button
                                        disabled={!dirty || !isValid || isSubmitting}
                                        variant='contained'
                                        color='primary'
                                        type='submit'
                                        onClick={handleSubmit}
                                    >
                                        Login
                                    </Button>
                                </Box>
                            </form>
                        </>
                    )}
                </Formik>
            </Container>
        </Grid>

    );
};

export default Login;