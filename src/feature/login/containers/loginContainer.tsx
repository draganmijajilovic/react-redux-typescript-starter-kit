import React, { useState } from 'react';
import {
    Typography,
    Button,
    Container,
    CssBaseline,
    Avatar,
    TextField,
    FormControlLabel,
    Grid,
    Link,
    Checkbox,
    MuiThemeProvider,
} from '@material-ui/core';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { connect } from 'react-redux';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { fetchLoginAsync } from '../../../shared/auth/actions/actions';
import { AuthModule } from '../../../shared/auth/module/module';
import { useStyles } from '../styles/login';
import { logintheme } from '../styles/logintheme';

interface LoginProps {
    login: typeof fetchLoginAsync.request;
}

function Login(props: LoginProps) {
    const classes = useStyles();
    const [isLoginForm, toggleIslogin] = useState(true);
    const toggleLoginRegister = () => {
        toggleIslogin(!isLoginForm);
        console.log(isLoginForm);
    }
    const renderRegister = () => {
        return (
            <>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="firstname"
                    label="Firstname"
                    type="text"
                    id="firstname"
                    autoComplete="off"
                    color="primary"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="lastname"
                    label="lastname"
                    type="text"
                    id="lastname"
                    autoComplete="off"
                    color="primary"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="email"
                    label="E mail"
                    type="email"
                    id="email"
                    autoComplete="off"
                    color="primary"
                />
            </>
        )
    }
    return (
        <React.Fragment>
            <MuiThemeProvider theme={logintheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h5" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="off"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                color="primary"
                            />
                            {!isLoginForm && renderRegister()}
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={props.login}
                            >
                                Sign In
                            </Button>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={toggleLoginRegister}
                            >
                                register
                            </Button>
                            <Grid container alignItems="center">
                                <Grid item xs={12} sm container justify="center">
                                    <Link href="#" variant="body2" color="textPrimary">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item xs={12} sm container justify="center">
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="secondary" />}
                                        label="Remember me"
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
            </MuiThemeProvider>
        </React.Fragment>
    );
}

const dispatchToProps = {
    login: fetchLoginAsync.request,
};

const ConnectedLogin = connect(undefined, dispatchToProps)(Login);

export const LoginContainer = () => (
    <DynamicModuleLoader modules={[AuthModule]}>
        <ConnectedLogin></ConnectedLogin>
    </DynamicModuleLoader>
);
