import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { Redirect } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { register, login } from '../../../shared/auth/actions/actions';
import { AuthModule } from '../../../shared/auth/module/module';
import { useStyles } from '../styles/login';
import { logintheme } from '../styles/logintheme';

interface LoginProps {
    isLoggedIn?: boolean;
}

function Login(props: LoginProps) {
    const { isLoggedIn } = props;
    const classes = useStyles();


    const [isLoginForm, toggleIslogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastname] = useState('');
    const dispatch = useDispatch();
    const toggleLoginRegister = () => {
        toggleIslogin(!isLoginForm);
    }

    if (isLoggedIn) {
        return <Redirect to={{ pathname: '/home/dashboard' }} />
    }

    const registerAction = () => {
        dispatch(register({
            data: {
                username,
                password,
                email,
                first_name,
                last_name
            }
        }));
    }

    const loginAction = () => {
        dispatch(login({
            data: {
                username,
                password,
            }
        }))
    }

    const handleChange = (event: any) => {
        switch (event.target.name) {
            case 'username':
                setUsername(event.target.value)
                break;
            case 'password':
                setPassword(event.target.value)
                break;
            case 'firstname':
                setFirstName(event.target.value)
                break;
            case 'lastname':
                setLastname(event.target.value)
                break;
            case 'email':
                setEmail(event.target.value)
                break;
            default:
                return;
        }
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
                            />
                            {!isLoginForm && renderRegister()}
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={isLoginForm ? loginAction : registerAction}
                            >
                                {isLoginForm ? 'sign in ' : 'register'}
                            </Button>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={toggleLoginRegister}
                            >
                                register instead
                            </Button>
                            <Link href="#" variant="body2" color="textPrimary" >
                                Forgot password?
                            </Link>
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
        </React.Fragment >
    );
}

const mapStateToProps = (state: any) => {
    return {
        isLoggedIn: state.authState.isLoggedIn,
    };
};

const ConnectedLogin = connect(mapStateToProps, undefined)(Login);

export const LoginContainer = () => (
    <DynamicModuleLoader modules={[AuthModule]}>
        <ConnectedLogin></ConnectedLogin>
    </DynamicModuleLoader>
);
