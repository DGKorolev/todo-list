import React, {useState} from 'react';
import {Box, Button, Container, Grid, TextField, Typography} from "@material-ui/core";
import Auth from '../services/auth'
import {createFetch} from "../hooks/createFetch";
import {Formik} from "formik";
import * as yup from 'yup';
import {Redirect} from "react-router-dom";

const Registration = ({login, setError}) => {

    const [redirect, setRedirect] = useState(false)

    const validationSchema = yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required(),
        confirmPassword: yup.string().required().oneOf([yup.ref('password')], 'Password mismatch'),
    })


    const registrationFetch = createFetch(async (values) => {

        const res = await Auth.registration(values)

        if (!res.jwtToken) return

        setRedirect(true)
        login(res.jwtToken)

    }, setError)

    if (redirect) {
        return (<Redirect to='/'/>)
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
                        delete values.confirmPassword
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
                                    <Typography variant="h4" component="h4" align='center'>Registration</Typography>
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
                                    <TextField
                                        name='confirmPassword'
                                        label='Confirm password'
                                        type='text'
                                        utocomplete="password"
                                        error={!!(touched.confirmPassword && errors.confirmPassword)}
                                        helperText={touched.confirmPassword && errors.confirmPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.confirmPassword}
                                    />
                                </Grid>
                                <Box mt={3}>
                                    <Button
                                        disabled={!dirty || !isValid}
                                        variant='contained'
                                        color='primary'
                                        type='submit'
                                        onClick={handleSubmit}
                                    >
                                        Registration
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

export default Registration;