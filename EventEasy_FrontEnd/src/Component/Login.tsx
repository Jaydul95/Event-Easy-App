import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { VerifyUser } from "../api/UserMethod";
import GlobalAppStore from "../store/GlobalAppStore";

//Login component 

const Login: React.FC<any> = () => {

    const [loginData, setLoginData] = useState<any>();
    const navigate = useNavigate(); 

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setLoginData((prevValues: { [fieldName: string]: any }) => ({
            ...prevValues,
            [name]: value,
          }));
    }

    const onLogin = async () => {

        if (loginData?.password === "" || loginData?.password === "" ) {
            toast.error("Please fill all fields!");
        } else {
            const result = await VerifyUser(loginData);
            if (result?.data?.status === 200) {
                GlobalAppStore.getInstance().setIsAuthenticate(true);
                console.log(result?.data?.body?.id);
                
                GlobalAppStore.getInstance().setUserId(result?.data?.body?.id);
                toast.success("User Login successfuly!");
                navigate("/home");
            }
            toast.error(result?.data?.error);
        }
    }
    
    return (
        <>
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item lg={12} mt={5} mb={5} sx={{ 
                        display: "flex", 
                        flexDirection: "row", 
                        alignItems: "center", 
                        justifyContent: "center"}}>
                    <Typography variant="h4" sx={{color: "#273746"}}>Login</Typography>
                </Grid>
                <Grid item lg={12} mt={6} mr={5} ml={5}>
                    <Typography mr={2}>Username</Typography>
                    <TextField fullWidth id="username" size="small" variant="outlined" name="username" onChange={handleChange} value={loginData?.username}/>
                </Grid>
                <Grid item lg={12} mr={5} ml={5}>
                    <Typography mr={2}>Password</Typography>
                    <TextField fullWidth type="password" id="passowrd" size="small" variant="outlined" name="password" onChange={handleChange} value={loginData?.passowrd}/>
                </Grid>
                <Typography mt={3} sx={{fontSize: "10px"}}>
                    Don't have an account yet? <Link className="pointer" to="/signup">Click here to create an account</Link>
                </Typography>
                
                <Grid item lg={12} mr={5} ml={5} mt={4} sx={{ 
                        display: "flex", 
                        flexDirection: "row", 
                        alignItems: "center", 
                        justifyContent: "center"}}>
                        <Button variant="contained" fullWidth size="small" onClick={onLogin}> LOGIN </Button>
                </Grid>
            </Grid>
        </>
    );
}

export default Login;