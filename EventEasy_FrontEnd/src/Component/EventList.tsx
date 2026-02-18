import { Button, Grid, Typography } from "@mui/material";
import GlobalAppStore from "../store/GlobalAppStore";
import { useNavigate } from "react-router-dom";
import { GetEvents, testData } from "../api/EventMethod";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import { Dayjs } from "dayjs";
import dayjs from 'dayjs';
import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

const EventList: React.FC<any> = () => {

    const navigate = useNavigate(); 
    const [rows, setRows] = useState<any>(undefined);
    const [events, setEvents] = useState<any>(undefined);
    const [selectedDate, setSelectedDate] = useState<any>(undefined);
    const [searchDate, setsearchDate] = useState<any>(undefined);
    // Sample data
    // const rows = [
    //     { id: 1, col1: 'Hello', col2: 'World' },
    //     { id: 2, col1: 'DataGrid', col2: 'Material-UI' },
    //     { id: 3, col1: 'React', col2: 'Component' },
    //     { id: 4, col1: 'Hello', col2: 'World' },
    //     { id: 5, col1: 'DataGrid', col2: 'Material-UI' }
    // ];

    const view = async (params: any) => {
        console.log(params);
        const selectedEvent = await getSelectedEvent(params?.row?.eventId);
        navigate("/event-view", {
            state: {
              event: {...selectedEvent, eventId: params?.row?.eventId}
            },
          });
        return null;
    }

    // Column definitions
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Id', width: 90 },
        { field: 'name', headerName: 'Name', width: 350 },
        { field: 'startTime', headerName: 'Start Time', width: 200 },
        { field: 'endTime', headerName: 'End Time', width: 200 },
        { field: 'publisher', headerName: 'Publisher', width: 150 },
        { field: 'venue', headerName: 'Venue', width: 250 },
        { field: 'rating', headerName: 'Rating', width: 80 },
        { field: 'action', headerName: 'Action', width: 100,
            renderCell: (params: GridRenderCellParams<any, Date>) => (
                <strong>
                  {/* {params?.value.getFullYear()} */}
                  <IconButton
                    size="small"
                    style={{ marginLeft: 16 }}
                    tabIndex={params.hasFocus ? 0 : -1}
                    onClick={() => view(params)}
                >
                    <VisibilityIcon/>
                </IconButton>
                </strong>
              )
         },

    ];

    const getEvents = async () => {
        // const events = await GetEvents();
        const events = {data: testData};
        setEvents(events);
        const populatedEvents = await handleResponse(events);
        setRows(populatedEvents);
        console.log(populatedEvents);
        
    }

    useEffect(()=> {
        if (!GlobalAppStore.getInstance().getIsAuthenticate()){
            navigate("/login");
        }

        getEvents()
    }, [])

    const getSelectedEvent = (eventId: any) => {
        console.log(events);
        
        let result;
        for (const event of events?.data || []) {
            if (eventId === event.event_id) {
                result = event;
                break;  // Exit the loop when the condition is met
            }
        }

        console.log('result: ', result);
        

        return result;
    }

    const handleResponse = (eventRes: any) => {
        console.log(eventRes?.data);
        let finalResult: any = [];
        let index = 0;
        eventRes?.data.forEach((event: any)=>{
            index = index + 1;
            const modifyEvent = {
                id: index ,
                eventId: event?.event_id,
                name: event?.name,
                startTime: event?.start_time,
                endTime: event?.end_time,
                publisher: event?.publisher,
                venue: event?.venue?.full_address,
                rating: event?.venue?.rating
            }
    
            finalResult.push(modifyEvent);
        });
    
        console.log(finalResult);
        return finalResult;
    
    }

    const handleDateChange = (newValue: Dayjs | null) => {
        if (newValue) {
            setsearchDate(newValue);
            setSelectedDate(newValue.format('YYYY-MM-DD'));
        }
    };

    const search = async () => {
        const populatedEvents = await handleResponse(events);
        let result = [];
        for (const event of populatedEvents || []) {
            if (dayjs(event.startTime).format('YYYY-MM-DD') === selectedDate) {
                result.push(event);
            }
        }
        console.log('result: ', result);
        setRows(result);
    }

    const clearSearch = () => {
        setsearchDate(undefined);
        setSelectedDate(undefined);
        getEvents();
    }

    return (
        <>
                <Grid item lg={12} xs={12} mt={5} mb={3} pt={6} pl={4}>
                    <Typography variant="h5" sx={{color: "#273746"}}>New Event List</Typography>
                </Grid>
                <Grid item lg={12} xs={12} mt={3} pl={4} sx={{display: "flex", flexDirection: "row", gap: 2}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker slotProps={{
                                textField: {size: 'small'}
                            }} label="Start Time" onChange={handleDateChange} value={searchDate}/>
                        <Button variant="contained" size="small" onClick={search}>SEARCH</Button>
                        <Button variant="contained" color="error" size="small" onClick={clearSearch}>CLEAR</Button>
                    </LocalizationProvider>
                </Grid>
                <Grid item lg={12} mt={5} pl={4} pr={4}>
                    {rows ? <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: {
                        pageSize: 5,
                        },
                    },
                    }}
                    pageSizeOptions={[5]}
                    // checkboxSelection
                    disableRowSelectionOnClick
                    /> : <>Loading</>}
                </Grid>
        </>
    );
}

export default EventList;