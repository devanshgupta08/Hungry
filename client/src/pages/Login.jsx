import React, { useState } from 'react';
import {Box, Typography, TextField, Button, Link, Grid} from '@mui/material';
import axios from 'axios';

const login = () => {

  const [isRegister, setIsRegister] = useState(false);

  const [inputs, setInputs] = useState({
    fullName:  "",
    email: "",
    mobileNo: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value,
    }));
  };

  const handleSubmit = async() => {

    if(inputs.password !== inputs.confirmPassword){
      alert('Passwords do not match. Please try again.');
      return;
    }

    const loginFormData = new FormData();
    loginFormData.append("fullName", inputs.fullName)
    loginFormData.append("email", inputs.email)
    loginFormData.append("mobileNo", inputs.mobileNo)
    loginFormData.append("password", inputs.password)

    try{
      const response = await axios ({
        method : "post",
        url : "/api/Login",
        data : loginFormData,
        headers: {"Content-Type": "multipart/form-data" }, 
      });
    } catch(error) {
      console.log(error);
    }
  }

  const resetState = () => {
    setIsRegister(!isRegister);
    setInputs({fullName: "", email: "", mobileNo: "", password: "", confirmPassword: ""});
  }

  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <Box display = "flex" 
        flexDirection = {"column"} 
        maxWidth={600} 
        alignItems="center" 
        justifyContent={"center"}
        margin="auto"
        marginTop={5}
        padding={3}
        borderRadius={5}
        boxShadow={"5px 5px 10px #ccc"}
        sx={{":hover; " : {
          boxShadow : "10px 10px 20px #ccc",
        },
      }}
        >
          <Typography sx = {{marginTop: 3, borderRadius: 1.5,}} variant="h2" padding={3} textAlign="center">
            {isRegister ? "Register" : "Login"}
          </Typography>
          
      
          {isRegister && 
          (<div style={{ width: "90%", padding: "5px" }}> <TextField fullWidth onChange={handleChange} value={inputs.fullName} name="fullName" margin="normal" type={'text'} variant="outlined" placeholder="Full Name*" required sx={{"& .MuiOutlinedInput-root": {
          borderColor: "black", "&:hover fieldset": {borderColor: "green", }, },}}></TextField> </div>)}
          
          
          <div style={{ width: "90%", padding: "5px" }}>
          <TextField
          fullWidth
          onChange={handleChange} 
          value={inputs.email} 
          name="email" 
          margin="normal" 
          type={'email'} 
          variant="outlined" 
          placeholder="Email Address*" 
          required
          sx={{
          "& .MuiOutlinedInput-root": {
          borderColor: "black", "&:hover fieldset": {borderColor: "green", }, },}}>
          </TextField>
          </div>

          {isRegister && (<div style={{ width: "90%", padding: "5px" }}><TextField fullWidth onChange={handleChange} value={inputs.mobileNo} name="mobileNo" margin="normal" type={'tel'} variant="outlined" placeholder="Mobile Number*" required sx={{"& .MuiOutlinedInput-root": {
          borderColor: "black", "&:hover fieldset": {borderColor: "green", }, },}}></TextField></div>)}
          
          <div style={{ width: "90%", padding: "5px" }}>
          <TextField fullWidth onChange={handleChange} value={inputs.password} name="password" margin="normal" type={'password'} variant="outlined" placeholder="Password*" required sx={{"& .MuiOutlinedInput-root": {
          borderColor: "black", "&:hover fieldset": {borderColor: "green", }, },}}></TextField>
          </div>
          
          {isRegister && (<div style={{ width: "90%", padding: "5px" }}><TextField fullWidth onChange={handleChange} 
          value={inputs.confirmPassword} name="confirmPassword" margin="normal" type={'password'} variant="outlined" placeholder="Confirm Password*" required sx={{"& .MuiOutlinedInput-root": {
          borderColor: "black", "&:hover fieldset": {borderColor: "green", }, },}}></TextField></div>)}

          <div style={{ width: "90%", padding: "5px" }}>
          <Button type="submit" fullWidth
          sx = {{marginTop: 3, borderRadius: 1.5}} 
          variant = "contained" 
          color = "success" >
            {isRegister ? "Register" : "Login"}
            </Button> </div>
          
          {/* <Button onClick={resetState}
           sx = {{marginTop: 3, borderRadius: 1.5,}} >
            {isRegister ? "Already a member? Login Here" : "New member? Register Here"}
            </Button> */}

           <Grid container justifyContent="center">
              <Grid item onClick={resetState} sx = {{marginTop: 3, color: "blue", cursor: "pointer", "&:hover": {
            textDecoration: "underline",
          },}}>
                {isRegister ? "Already have an account? Log In" : "Don't have an account? Register here"}
              </Grid>
            </Grid>
        </Box>
      </form>
    </div>
  );
};

export default login;