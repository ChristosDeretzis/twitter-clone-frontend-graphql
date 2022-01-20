import React, { useState } from 'react';
import { Button, Container, CssBaseline, Grid, Link, TextField, Typography, Alert, Avatar } from "@mui/material";
import { Formik } from "formik";
import { useMutation } from '@apollo/client';
import { makeStyles } from '@mui/styles';
import { SignUpSchema } from '../../utils/validationSchemas';
import { SIGNUP } from '../../queries/Auth/auth';
import { IS_LOGGED_IN } from '../../queries/User';
import TwitterIcon from '@mui/icons-material/Twitter';


const SignupStyles = makeStyles({
    paper: {
        marginTop: 80,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #dddddd',
        borderRadius: 5,
        padding: 30
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: 30
    },
    submit: {
        margin: '20px 0',
        color: "#1d9bf0"
    },
    link: {
        marginBottom: '10px'
    }
});


const SignUp = (props) => {
    const styles = SignupStyles();

    const [errorMessage, setErrorMessage] = useState("");

    const INITIAL_VALUES = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        repeatPassword: '',
    }
    
    const [SignupMutation, { loading }] = useMutation(SIGNUP, {
        update(cache, { data: { signup } }) {
            localStorage.setItem("token", signup.token);
            localStorage.setItem("user", JSON.stringify(signup.user));

            cache.writeQuery({
                query: IS_LOGGED_IN,
                data: {
                    IsLoggedIn: true,
                    User: JSON.parse(localStorage.getItem("user")),
                }
            });
        }
    });

    const serverSignUp = async (values, history) => {
        try {
            setErrorMessage("");
            await SignupMutation({
                variables: {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    userName: values.userName,
                    email: values.email,
                    password: values.password
                }
            });
        } catch(err) {
            setErrorMessage(err.message);
        }
    }

    return (
        <Formik
            initialValues = {INITIAL_VALUES}
            validationSchema= {SignUpSchema}
            onSubmit={values => {
                console.log(values);
                serverSignUp(values,props.history);
            }}>
            {(formik) => {
                return (
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={styles.paper}>
                            <Avatar sx={{ m: 1, bgcolor: '#1d9bf0' }}>
                                <TwitterIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5" className="text">
                                Sign Up
                            </Typography>
                            <form className={styles.form} onSubmit={formik.handleSubmit}>
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                    <TextField
                                        name="firstName"
                                        label="First Name"
                                        id="firstName"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        size="small"
                                        onChange={formik.handleChange}
                                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                        helperText={formik.touched.firstName && formik.errors.firstName}
                                    />
                                    </Grid>
                                    <Grid item xs={6}>
                                    <TextField
                                        name="lastName"
                                        label="Last Name"
                                        id="lastName"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        size="small"
                                        onChange={formik.handleChange}
                                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                        helperText={formik.touched.lastName && formik.errors.lastName}
                                    />
                                    </Grid>
                                </Grid>
                                <TextField
                                    name="email"
                                    label="Email Address"
                                    id="email"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    autoFocus
                                    size="small"
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                 />
                                 <TextField
                                    name="userName"
                                    label="Username"
                                    id="userName"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    size="small"
                                    onChange={formik.handleChange}
                                    error={formik.touched.userName && Boolean(formik.errors.userName)}
                                    helperText={formik.touched.userName && formik.errors.userName}
                                 />
                                <TextField
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    size="small"
                                    autoComplete="current-password"
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                                <TextField
                                    name="repeatPassword"
                                    label="Repeat Password"
                                    type="password"
                                    id="repeatPassword"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    size="small"
                                    onChange={formik.handleChange}
                                    error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
                                    helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
                                />
                                <div className={styles.submit}>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained">
                                    Sign Up
                                    </Button>
                                </div>
                                <div className={styles.link}>
                                    <Link variant="body2" onClick={props.toggle}>
                                        {"Already have an account? Sign In"}
                                    </Link>
                                </div>
                                { errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null }
                           </form>
                        </div>
                    </Container>
                );
            }}
        </Formik>
    )
};

export default SignUp;