//Event component that shows the events 

import { Box, Button, Divider, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from "dayjs";
import GlobalAppStore from "../store/GlobalAppStore";
import { SaveBooking } from "../api/EventMethod";
import { toast } from "react-toastify";

//Table view

const Event: React.FC<any> = () => {
    const location = useLocation();
    const { state } = location;
    const [event, setEvent] = useState<any>(undefined);
    const navigate = useNavigate();
    const [showBookPage, setShowBookPage] = useState<boolean>(false)
    const [bookingData, setBookingData] = useState<any>();

    const handleDateChange = (newValue: Dayjs | null) => {
        if (newValue) {
            console.log(newValue.format('YYYY-MM-DD'));
            setBookingData((prevValues: { [fieldName: string]: any }) => ({
                ...prevValues,
                date: newValue.format('YYYY-MM-DD'),
            }));
        }
    };

    const saveBooking = async () => {
        const booking = {
            ...bookingData,
            userId: GlobalAppStore.getInstance().getUserId(),
            eventId: event?.eventId
        }
        console.log(booking);
        
        const result = await SaveBooking(booking);

        if (result?.data?.status === 200) {
            toast.success("Booking Added Sucessfuly!");
        }
        console.log(result);
        
    }

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setBookingData((prevValues: { [fieldName: string]: any }) => ({
            ...prevValues,
            [name]: value,
          }));
    }

    useEffect(() => {
        console.log('state: ', state);
        setEvent(state?.event);
    }, [])

    const backToHome = () => {
        navigate("/events")
    }

    return (
        <>
            <Box pt={6}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '& > :not(style)': {
                    m: 10,
                    width: 1200,
                    height: 500,
                    },
                }}
                >

                <Paper elevation={3} sx={{backgroundColor: "#e4e9fd"}}>
                    <IconButton
                        size="small"
                        onClick={backToHome}
                    >
                        <ArrowBackIcon/>
                    </IconButton>

                    {!showBookPage && <><Grid container padding={2}>
                        <Typography padding={1}> <strong>Name: </strong>{event?.name}</Typography>
                        <Divider sx={{ width: '100%' }} />

                        <Typography padding={1}>
                            <strong>Address: </strong>
                            <Box component="span" sx={{ marginRight: 6 }}>{event?.venue?.full_address}</Box>
                            <strong>Country: </strong>
                            <Box component="span" sx={{ marginRight: 6 }}>{event?.venue?.country}</Box>
                            <strong>City: </strong>
                            <Box component="span" sx={{ marginRight: 6 }}>{event?.venue?.city}</Box>
                        </Typography>
                        <Divider sx={{ width: '100%' }} />

                        <Typography padding={1}> <strong>Publisher: </strong>{event?.publisher}</Typography>
                        <Divider sx={{ width: '100%' }} />

                        <Typography padding={1}>
                            <strong>Start Time: </strong>
                            <Box component="span" sx={{ marginRight: 6 }}>{event?.start_time}</Box>
                            <strong>End Time: </strong>
                            <Box component="span">{event?.end_time}</Box>
                        </Typography>
                        <Divider sx={{ width: '100%' }} />

                        <Typography padding={1}> <strong>Link: </strong><a href={event?.info_links[0]?.link}>{event?.info_links[0]?.link}</a></Typography>
                        <Divider sx={{ width: '100%' }} />

                        <Typography padding={1}> <strong>Description: </strong>{event?.description}</Typography>
                    </Grid>
                    <Grid container justifyContent="flex-end" padding={2} mt={6}>
                        <Button variant="outlined" onClick={()=>{
                            setShowBookPage(true);
                        }} sx={{ 
                            backgroundColor: "#bfdcf9", // Light fill color with some transparency
                            borderColor: "blue", // Border color
                            color: "#000", // Text color
                            '&:hover': {
                                backgroundColor: "blue", // Full fill on hover
                                borderColor: "#bfdcf9",
                            }
                        }}> BOOK NOW </Button>
                    </Grid></>}

                    {showBookPage && <Grid container justifyContent="center" alignItems="center" spacing={2}>
                            <Grid item lg={12} mt={3} sx={{ 
                                display: "flex", 
                                flexDirection: "row", 
                                alignItems: "center", 
                                justifyContent: "center"}}>
                                <Typography variant="h5" sx={{color: "#273746"}}>{event?.name}</Typography>
                            </Grid>
                            <Grid container lg={4} justifyContent="center" alignItems="center">
                            <Grid item lg={12} xs={12} mt={3} mr={5} ml={5}>
                                <Typography mr={2}>Full Name</Typography>
                                <TextField fullWidth id="name" size="small" variant="outlined" name="name" onChange={handleChange} value={bookingData?.name}/>
                            </Grid>
                            <Grid item lg={12} xs={12} mt={2} mr={5} ml={5}>
                                <Typography mr={2}>Email</Typography>
                                <TextField fullWidth id="email" size="small" variant="outlined" name="email" onChange={handleChange} value={bookingData?.email}/>
                            </Grid>
                            <Grid item lg={12} xs={12} mt={2} mr={5} ml={5}>
                                <Typography mr={2}>Date</Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker slotProps={{
                                            textField: {size: 'small', fullWidth: true}
                                        }} onChange={handleDateChange}/>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item lg={12} mr={5} ml={5} mt={4} sx={{ 
                                    display: "flex", 
                                    flexDirection: "row", 
                                    alignItems: "center", 
                                    justifyContent: "center"}}>
                                    <Button variant="contained" fullWidth size="small" onClick={saveBooking}> BOOK </Button>
                            </Grid>
                        </Grid>
                        
                    </Grid>}
                    
                </Paper>
            </Box>
        </>
    );
}

export default Event;