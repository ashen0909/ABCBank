import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  {useState,useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import axios from 'axios'
import Home from './Home'

import { InputLabel, Select } from '@mui/material';
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const defaultTheme = createTheme();

export default function Register() {

    const [accountNumber, setAccountNumber] = useState("");
    const [firstDeposit, setFirstDeposit] = useState("");
    const [accountType, setAccountType] = useState("");
    const [userToken, setToken] = useState("")

    let data = {
        accountNumber: accountNumber,
        accountBalance: firstDeposit,
        type: accountType
    }

    useEffect(() => {
        const storedData = localStorage.getItem('token');
        const data = storedData ? JSON.parse(storedData) : null;
        setToken(data);
    })

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("data", data)
        try {
            const response = await axios.post(
              'http://localhost:8089/api/v1/auth/createBankAccount',data,
              {
                headers: {
                  Authorization: `Bearer ${userToken}`,
                },
              }
            );
            alert("Account Created")
            window.location.href="/viewbankaccounts"
          } catch (error) {
            console.error('Error fetching bank accounts:', error);
          }
    };

    return (
        <div>
            <Home />
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Typography component="h1" variant="h5">
                            Create Bank Account
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={1}>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="accountNumber"
                                        label="Account Number"
                                        name="email"
                                        value={accountNumber}
                                        onChange={(e) => setAccountNumber(e.target.value)}
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="accountType"
                                        label="First Deposit"
                                        name="nic"
                                        value={firstDeposit}
                                        onChange={(e) => setFirstDeposit(e.target.value)}
                                        autoComplete="nic"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel id="demo-simple-select-label">Account Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={accountType}
                                        label="Account type"
                                        onChange={(e) => setAccountType(e.target.value)}
                                    >
                                        <MenuItem value='SAVING'>Saving</MenuItem>
                                        <MenuItem value='CHECKING'>Fix</MenuItem>=
                                    </Select>
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Create
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
}