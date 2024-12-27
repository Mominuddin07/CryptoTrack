import React, { memo } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useCryptoState } from '../cryptocontext'; 

const Header = memo(() => {
  const navigate = useNavigate();
  const { currency, setCurrency } = useCryptoState(); 
console.log(currency)
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  const handleCurrencyChange = (e) => {
    if (currency !== e.target.value) {
      setCurrency(e.target.value);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                flex: 1,
                color: "gold",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => navigate('/')} // Navigate to the homepage
            >
              CryptoTracker
            </Typography>
            <Select
              variant="outlined"
              value={currency}
              onChange={handleCurrencyChange}
              sx={{
                width: 100,
                height: 40,
                marginRight: 15,
                color: "white",
              }}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
});

export default Header;
