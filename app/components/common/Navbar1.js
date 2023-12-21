import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';

import { useRouter } from 'next/navigation';
import logo from '../../assets/logo1.png'

const pages = ["Home",'portfolio', 'About-us', 'Contact-us'];

function Navbar() {
  const router = useRouter()
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  console.log(logo)

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="static"
      sx={{ backgroundColor: 'transparent' }}
    >
      <Container maxWidth="xl"
        sx={{ color: 'rgb(209 213 219)' }}
      >
        <Toolbar disableGutters>
          <img src={logo.src} className=' logo mr-1 h-7 md:h-9 md:none filter grayscale' />

          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontFamily: 'Josefin Sans',
            }}
          >
            TheFilmHouse
          </Typography>


          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Josefin Sans',
              fontWeight: 200,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              whiteSpace: 'normal',
            }}
          >
            TheFilmHouse
          </Typography>
          <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"

            >
              <MenuIcon
                fontSize='large'
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}
                 onClick={() => {
                  if(page=='Home'){
                    router.push("/")

                  }else{
                    router.push(page)

                  }
                  }}>
                    
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
               <a
            className='bg-gray-300 m-2 mb-6 p-2 text-black rounded-lg'
            href='tel:+918976487428'
          > 
            CALL-US
          </a>
            </Menu>
          </Box>
          {/* large screen ka hai */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  if(page=='Home'){
                    router.push("/")

                  }else{
                    router.push(page)

                  }
                  }}
               
                sx={{ my: 2, mx: 4, color: 'inherit', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <a
  className='bg-gray-300 m-2 p-2 text-black rounded-lg hidden md:inline-block'
  href='tel:+918976487428'
>
  CALL-US
</a>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;