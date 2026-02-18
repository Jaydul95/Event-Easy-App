import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { FetchBookingByUserID } from "../api/EventMethod";
import GlobalAppStore from "../store/GlobalAppStore";
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import { Button, Grid, Typography } from "@mui/material";

const MyBookings: React.FC<any> = () => {

    const [rows, setRows] = useState<any>(undefined);


    // Column definitions
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Booking Id', width: 90 },
        { field: 'name', headerName: 'Full Name', width: 250 },
        { field: 'email', headerName: 'Email', width: 300 },
        { field: 'date', headerName: 'Booking Date', width: 200, valueFormatter: (params: any)=>{
            const date = new Date(params);
            return date.toISOString().split('T')[0];
        }},
        { field: 'eventId', headerName: 'EventId', width: 550 },
        // { field: 'action', headerName: 'Action', width: 100,
        //     renderCell: (params: GridRenderCellParams<any, Date>) => (
        //         <strong>
        //             {/* {params?.value.getFullYear()} */}
        //             <IconButton
        //             size="small"
        //             style={{ marginLeft: 16 }}
        //             tabIndex={params.hasFocus ? 0 : -1}
        //             onClick={() => {}}
        //         >
        //             <VisibilityIcon/>
        //         </IconButton>
        //         </strong>
        //         )
        //     },
    ];

    const fetachBooking = async () => {
        const res = await FetchBookingByUserID(GlobalAppStore.getInstance().getUserId());
        console.log(res);
        setRows(res?.data);
    }

    useEffect(()=>{
        fetachBooking()
    }, [])

    return(
        <>
            <Grid item lg={12} xs={12} mt={5} mb={3} pt={6} pl={4}>
                <Typography variant="h5" sx={{color: "#273746"}}>My Booking List</Typography>
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

export default MyBookings;