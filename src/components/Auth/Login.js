import React, { useState } from 'react';
import { Button, Container, CssBaseline, Link, TextField, Typography, Alert, Avatar } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { Formik } from "formik";
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../queries/Auth/auth';
import { IS_LOGGED_IN } from '../../queries/User';
import { LoginSchema } from '../../utils/validationSchemas';
import TwitterIcon from '@mui/icons-material/Twitter';

const loginStyles = makeStyles({
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

const Login = (props) => {
    const styles = loginStyles();
    const [errorMessage, setErrorMessage] = useState("");

    const [loginMutation, { loading }] = useMutation(LOGIN, {
        update(cache, { data: { login } }) {
            localStorage.setItem("token", login.token);
            localStorage.setItem("user", JSON.stringify(login.user));

            cache.writeQuery({
                query: IS_LOGGED_IN,
                data: {
                    IsLoggedIn: true,
                    User: JSON.parse(localStorage.getItem("user")),
                }
            });
        }
    });

    const serverLogin = async (values, history) => {

        try {
            setErrorMessage("");
            await loginMutation({
                variables: {
                    email: values.email,
                    password: values.password
                }
            });
        } catch (err) {
                setErrorMessage(err.message);
        }
    }
    
    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
                serverLogin(values, props.history);
            }}>
                {(formik) => {
                    return (
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <div className={styles.paper}>
                                <Avatar sx={{ m: 1, bgcolor: '#1d9bf0' }}>
                                    <TwitterIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5" className="text" align="center">
                                    Sign In
                                </Typography>
                                <form className={styles.form} onSubmit={formik.handleSubmit}>
                                    <TextField
                                        name="email"
                                        label="Email Address"
                                        id="email"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        autoComplete="email"
                                        autoFocus
                                        onChange={formik.handleChange}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                    <TextField
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        autoComplete="current-password"
                                        onChange={formik.handleChange}
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        helperText={formik.touched.password && formik.errors.password}
                                    />
                                    <div className={styles.submit}>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained">
                                        Sign In
                                        </Button>
                                    </div>
                                    <div className={styles.link}>
                                        <Link variant="body2" 
                                            onClick={props.toggle}>
                                            {"Don't have an account? Sign Up"}
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

export default Login;