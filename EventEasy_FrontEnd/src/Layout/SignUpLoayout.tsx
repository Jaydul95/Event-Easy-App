import { Divider, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import myImage from '../assets/em3.jpg'
import myImage1 from '../assets/em1.jpg'

const SignUpLoayout: React.FC = () => {

    return (
        <>
            <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ height: "102vh", backgroundColor: "#808b96"}}>
                <Grid item lg={8} xs={12} sx={{backgroundColor: "rgba(229, 232, 232, 0.8)", // Use RGBA to set background with opacity
    opacity: 1.4 , display: "flex", alignItems: "center", justifyContent: "center", height: {
                    xs: "100vh", 
                    lg: "70vh"
                }}} >
                    <Grid container>
                        <Grid item lg={6} xs={6}>
                            <img src={myImage} alt="Description of the image" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                        </Grid>
                        <Grid item lg={6} xs={12}> 
                            <Outlet/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default SignUpLoayout;