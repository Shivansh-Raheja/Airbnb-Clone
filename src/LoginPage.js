import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useNavigate } from "react-router-dom";

    const Login = () => {
        const navigate = useNavigate();
        const paperStyle = { backgroundColor: '#9eeaec' , padding: 20, height: '70vh', width: 280, margin: "20px auto" }
        const avatarStyle = { backgroundColor: '#ffa089' }
        const btnstyle = { margin: '8px 0' }
        return (
            <Grid >
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2 onClick={() => navigate('/Home')}>Sign In</h2>
                    </Grid>
                    <TextField label='Username' placeholder='Enter username' fullWidth required />
                    <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                    <Typography >
                        <Link href="#" >
                            Forgot password ?
                        </Link>
                    </Typography>
                    <Typography > Do you have an account ?
                        <Link href="#" >
                         < h5 onClick={() => navigate('/SignUp')}>Sign Up </h5> 
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        )
    }

export default Login