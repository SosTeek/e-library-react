import React, { useState, useEffect } from 'react';
import { 
  Box,
  Button,
  Container,
  Avatar,
  TextField,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  Link,
} from '@mui/material';
// import { makeStyles } from '@mui/styles'
import { VisibilityOff, Visibility } from '@mui/icons-material';

import BackgroundImage from '../../assets/images/abc.jpg';
import * as Yup from 'yup';
import { Formik } from 'formik'

// const useStyles = makeStyles({
//     newStyle: {
//       width: '100%',
//       height:'100vh',
//       backgroundImage: `url(${BackgroundImage})`,
//       backgroundSize: 'cover',
//       paddingTop: 60,
//       backgroundRepeat: 'no-repeat',
//     },
//     box: {
//       width: 400,
//       height: 430,
//       marginRight: 'auto',
//       marginLeft: 'auto',
//       marginTop: 12,
//       justifyContent: 'center',
//       textAlign: 'center',
//       borderRadius: 15,
//       backgroundColor: 'white',
//       paddingTop: 25
//     },
//     avatar: {
//       height: 100,
//       width: 100,
//       marginLeft: 'auto',
//       marginRight: 'auto',
//     }
// })

const Login = () => {
  // const classes = useStyles();
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  })
  // const [password, setPassword] = useState('');
  // const [showPassword, setShowPassword] = useState(false);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
   const myStyle={
        backgroundImage: `url(${BackgroundImage})`,
        height:'100vh',
        maxWidth: '100%',
        backgroundSize: 'cover',
        paddingTop: 60,
        backgroundRepeat: 'no-repeat',
        // textAlign: '-webkit-center'
    };

  return (
    // <Container sx={{maxWidth:'100%'}} className={classes.newStyle}>
      <Container style={myStyle}> 
        <Box 
        // className={classes.box}
          sx={{
            width: 400,
            height: 430,
            marginRight: 'auto',
            marginLeft: 'auto',
            justifyContent: 'center',
            textAlign: 'center',
            borderRadius: 5,
            backgroundColor: 'white',
            paddingTop: 3
          }}
      >
        <Avatar
        // className={classes.avatar}
        sx={{
          height: 70,
          width: 70,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
         />
        <Typography sx={{
          marginTop: 1.5,
          textAlign: 'left',
          marginLeft: 5
        }} variant='h4'>Sign In</Typography>
        <Box sx={{
          marginTop: 2.5,
          textAlign: 'left',
          marginLeft: 5
        }}>
          
        <FormControl sx={{ m: 1, width: "33ch" }} variant="standard">
        <TextField
          required
          id="outlined-required"
          label="Email"
          onChange={handleChange('email')}
        />
        </FormControl>
         <FormControl sx={{ m: 1, width: "33ch" }} variant="standard">
          <InputLabel htmlFor="outlined-adornment-password" required
            id="outlined-required" sx={{marginLeft:1.5}}>Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl variant="standard">
          <Link href="#" onClick={()=> console.log('pressed')} underline="none" sx={{marginLeft: 2.1, marginTop: -0.3}}>Forgot Password?</Link>
          </FormControl>
          <Button variant="contained" sx={{ m: 1, marginTop: 3 , width: "38ch", borderRadius: 3, padding:1.5 }}>Sign In</Button>
        </Box>
      </Box> 
    </Container> 
  )
}
export default Login