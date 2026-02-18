import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Fade from '@mui/material/Fade';
import myImage from '../assets/em10.jpg'

const HomePage: React.FC<any> = () => {
    const navigate = useNavigate(); 
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 2000); // 2 seconds delay

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []);

    const goToEventList = () => {
        navigate("/events")
    }
    
    return(
        <>
            <Grid container pt={6} pl={4} pr={4}>
                <Grid container pt={6}>
                    <Grid item 
                    sx={{
                        height: "38rem", 
                        width: "100rem", 
                        position: "relative", 
                        overflow: "hidden", 
                        '::before': {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url(${myImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: "blur(0px)", // Adjust blur level as needed
                            zIndex: -1,
                        }
                    }}>
                    <Box 
                        sx={{
                            height: '100%', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center'
                        }}
                    >
                         {showButton && <Fade in={showButton} timeout={3000}>
                            <Button variant="outlined" onClick={goToEventList} sx={{ 
                                backgroundColor: "rgba(255, 255, 255, 0.8)", // Light fill color with some transparency
                                borderColor: "white", // Border color
                                color: "#000", // Text color
                                animation: 'pulse 1.5s infinite', // Pulsing effect
                                '@keyframes pulse': {
                                    '0%': {
                                        transform: 'scale(1)',
                                    },
                                    '50%': {
                                        transform: 'scale(1.05)', // Scale up to 110%
                                    },
                                    '100%': {
                                        transform: 'scale(1)',
                                    },
                                },
                                '&:hover': {
                                    backgroundColor: "rgba(255, 255, 255, 1)", // Full fill on hover
                                    borderColor: "white",
                                }
                            }}> GO TO EVENTS</Button>
                         </Fade>}
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            
        </>
    );
}

export default HomePage;