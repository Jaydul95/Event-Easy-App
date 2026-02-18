import React, { useEffect, useState } from "react";
import { Button, Grid, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SaveNewUser } from "../api/UserMethod";

const SignUp: React.FC<any> = () => {

    const [signUpData, setSignUpData] = useState<any>({username: '', password: '', confirmPassword: ''});
    const navigate = useNavigate(); 

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setSignUpData((prevValues: { [fieldName: string]: any }) => ({
            ...prevValues,
            [name]: value,
          }));
    }

    const onSave = async () => {

        if (signUpData?.password === "" || signUpData?.confirmPassword === "" || signUpData?.password === "" ) {
            toast.error("Please fill all fields!");
        } else {
            if (signUpData?.confirmPassword.length < 8) {
                toast.error("Password must contain 8 characters");
            } else {
                if (signUpData?.password !== signUpData?.confirmPassword) {
                    toast.error("password is not matched!");
                } else {
                    const result = await SaveNewUser(signUpData);
                    if (result?.data?.status === 200) {
                        toast.success("User added successfuly!");
                        navigate("/login");
                    }
                    toast.error(result?.data?.error);
                }
            }

        }
    }

    useEffect(() => {
        console.log(signUpData);
        
    }, [signUpData])

    return (
        <>
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item lg={12} xs={12} mt={5} mb={3} sx={{ 
                        display: "flex", 
                        flexDirection: "row", 
                        alignItems: "center", 
                        justifyContent: "center"}}>
                    <Typography variant="h4" sx={{color: "#273746"}}>SignUp</Typography>
                </Grid>
                <Grid item lg={12} xs={12} mr={5} ml={5}>
                    <Typography mr={2}>Username</Typography>
                    <TextField fullWidth id="username" size="small" variant="outlined" name="username" onChange={handleChange} value={signUpData?.username}/>
                </Grid>
                <Grid item lg={12}xs={12} mr={5} ml={5}>
                    <Typography mr={2}>Password</Typography>
                    <TextField fullWidth type="password" id="password" size="small" variant="outlined" name="password" onChange={handleChange} value={signUpData?.password}/>
                </Grid>
                <Grid item lg={12} xs={12} mr={5} ml={5}>
                    <Typography mr={2}>Confirm Password</Typography>
                    <TextField fullWidth type="password" id="password" size="small" variant="outlined" name="confirmPassword" onChange={handleChange} value={signUpData?.confirmPassword}/>
                </Grid>
                <Typography mt={3} sx={{fontSize: "10px"}}>
                Already have an account? <Link className="pointer" to="/login">Click here to login</Link>
                </Typography>
                
                <Grid item lg={12} xs={12} mr={5} ml={5} mt={4} sx={{ 
                        display: "flex", 
                        flexDirection: "row", 
                        alignItems: "center", 
                        justifyContent: "center"}}>
                        <Button variant="contained" onClick={onSave} fullWidth size="small"> SIGNUP </Button>
                </Grid>
            </Grid>
        </>
    );
}

export default SignUp;