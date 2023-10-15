import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/vi';
import React, { useState } from 'react';
import themes from '../../theme/themes';
import dayjs from 'dayjs';



const data3 = [
    {
        id: 1, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', books: 200
    },
    {
        id: 2, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', books: 190
    },
    {
        id: 3, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', books: 180
    },
    {
        id: 4, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', books: 90
    },
    {
        id: 5, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', books: 70
    },
]

const data4 = [
    {
        id: 1, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', revenue: '25,000,000VNĐ'
    },
    {
        id: 2, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', revenue: '22,000,000VNĐ'
    },
    {
        id: 3, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', revenue: '19,000,000VNĐ'
    },
    {
        id: 4, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', revenue: '10,000,000VNĐ'
    },
    {
        id: 5, owner: 'Nguyễn Văn Tâm', name: 'Bãi Nguyễn Văn Cừ', revenue: '9,000,000VNĐ'
    },
]

export default function DashboardPLO() {
    const [selectedDate, setSelectedDate] = useState(dayjs());

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(date.format('MM/YYYY'));
    };

    return (
        <>
            <Typography variant='h4' sx={{ fontWeight: 'bold', m: '50px 0px' }}>Parking lot owner</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker
                    label="Tháng"
                    views={['month', 'year']}
                    onChange={handleDateChange}
                    value={selectedDate}
                />
            </LocalizationProvider>
            <Grid container spacing={5} mt={'3px'}>
                <Grid item xs={6}>
                    <Paper elevation={6} sx={{ borderRadius: '10px', p: '20px' }} >
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}> Top 5 most booked parking areas</Typography>
                        {data3.map((item, index) => (
                            <Grid container key={index} sx={{ backgroundColor: themes.palette.grey.light, p: '5px 10px', borderRadius: '10px', mt: '10px', ':hover': { backgroundColor: themes.palette.red.light } }}>
                                <Grid item xs={6} display={'flex'}>
                                    <Typography variant='h6' mr={'20px'}>{index + 1}</Typography>
                                    <Typography variant='h6'>{item.name}</Typography>
                                </Grid>
                                <Grid item xs={5} display={'flex'}>
                                    <AccountCircleIcon fontSize='medium' />
                                    <Typography variant='h6' ml={'5px'}> {item.owner}</Typography>
                                </Grid>
                                <Grid item xs={1} display={'flex'}>
                                    <WorkspacePremiumIcon fontSize='medium' />
                                    <Typography variant='h6' ml={'5px'}> {item.books}</Typography>
                                </Grid>
                            </Grid>
                        ))}
                        {data3.length === 0 &&
                            <Stack justifyContent={'center'} p={'20px'} textAlign={'center'}>
                                <img src='../image/no-results.png' style={{ width: '27%' }} />
                                <Typography variant='h5'>NOT FOUND DATA!</Typography>
                            </Stack>
                        }
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={6} sx={{ borderRadius: '10px', p: '20px' }} >
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}> Top 5 parking lots with the highest revenue</Typography>
                        {data4.map((item, index) => (
                            <Grid container key={index} display={'flex'} justifyContent={'space-between'} sx={{ backgroundColor: themes.palette.grey.light, p: '5px 10px', borderRadius: '10px', mt: '10px', ':hover': { backgroundColor: themes.palette.red.light } }}>
                                <Grid item xs={5} display={'flex'}>
                                    <Typography variant='h6' mr={'20px'}>{index + 1}</Typography>
                                    <Typography variant='h6'>{item.name}</Typography>
                                </Grid>
                                <Grid item xs={4} display={'flex'}>
                                    <AccountCircleIcon fontSize='medium' />
                                    <Typography variant='h6' ml={'5px'}> {item.owner}</Typography>
                                </Grid>
                                <Grid item xs={3} display={'flex'}>
                                    <LocalAtmIcon fontSize='medium' />
                                    <Typography variant='h6' ml={'5px'}> {item.revenue}</Typography>
                                </Grid>
                            </Grid>
                        ))}
                        {data4.length === 0 &&
                            <Stack justifyContent={'center'} p={'20px'} textAlign={'center'}>
                                <img src='../image/no-results.png' style={{ width: '27%' }} />
                                <Typography variant='h5'>NOT FOUND DATA!</Typography>
                            </Stack>
                        }
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}