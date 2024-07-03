import { AppBar, Button, IconButton, Toolbar, Box, Typography, Divider, List, ListItem, ListItemButton, ListItemText, Drawer } from '@mui/material'
import React from 'react'

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
    // const HeaderData = ['Resume', 'Portfolio', 'Contact']
    const HeaderData = [
        { name: 'Resume', href: '/resume' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact', href: '/contact' },

    ]

    const location = useLocation().pathname;
    console.log(location)
    //* for setting drawer 
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    //* icons array
    const icons = [
        { component: InstagramIcon, href: '#' },
        { component: FacebookIcon, href: '#' },
        { component: GitHubIcon, href: '#' },
        { component: LinkedInIcon, href: '#' },
    ];


    //* appbar in mobile devices
    const drawer = (
        <Box pb={3} onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Ayman Ibrahim
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <Link to={'/home'} style={{ color: 'black', textDecoration: 'none', width: '100%' }}>
                        <ListItem button sx={{ textAlign: 'center', color: 'inherit' }}>
                            <ListItemText primary={'Home'} />
                        </ListItem>
                    </Link>
                </ListItem>
                {HeaderData.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <Link to={item.href} style={{ color: 'black', textDecoration: 'none', width: '100%' }}>
                            <ListItem
                                button
                                sx={{ textAlign: 'center', color: 'inherit' }}
                            >
                                <ListItemText primary={item.name} />
                            </ListItem>
                        </Link>
                    </ListItem>
                ))}
            </List>

            {/*  icons in mobile devices */}
            <Box display='flex' flexDirection='row' flexGrow={1} gap={2} justifyContent='center'>
                {icons.map(({ component: IconComponent, href }, index) => (
                    <Box key={index} component='a' href={href} color='black'>
                        <IconComponent fontSize='small' sx={{ "&:hover": { color: 'orangered' }, transition: '.2s' }} />
                    </Box>
                ))}
            </Box>
        </Box>
    );

    return (
        <Box>
            <AppBar position="static" sx={{ color: 'black', background: 'white', borderRadius: '6px', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}>
                <Toolbar sx={{ paddingLeft: { md: '0px' }, }}>
                    <Link to={'/home'}>
                        <IconButton
                            href='/home'
                            size="large"
                            edge="start"
                            color="black"
                            aria-label="menu"
                            sx={{ mr: 2, width: '64px', height: '64px', backgroundColor: 'orange', marginLeft: '0px', borderRadius: '6px', display: { xs: 'none', md: 'flex' } }}
                        >
                            <PermIdentityIcon />
                        </IconButton>
                    </Link>
                    <Button sx={{ flexGrow: '1', display: { xs: 'flex', md: 'none' } }} onClick={handleDrawerToggle}>
                        <ViewStreamIcon color='warning' sx={{ color: 'black' }} />
                    </Button>
                    <Box display={'flex'} flexDirection={"row"} flexGrow={'1'} gap={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {HeaderData.map((el, index) => (
                            <Link key={index} to={el.href} style={{ textDecoration: 'none' }}>
                                <Button sx={{ '&:hover': { color: 'orange' }, color: location === el.href ? 'orange' :'black' }}>
                                    {el.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <Box display={'flex'} flexDirection={"row"} flexGrow={'1'} gap={1} justifyContent={'end'} sx={{ mr: '10px', display: { xs: 'none', md: 'flex' } }}>
                        {icons.map(({ component: IconComponent, href }, index) => (
                            <Box pt={1} key={index} component='a' href={href} color='black'>
                                <IconComponent fontSize='small' sx={{ "&:hover": { color: 'orangered' }, transition: '.2s' }} />
                            </Box>
                        ))}
                    </Box>
                    <Button color='warning' variant='contained' size='small' sx={{ borderRadius: '24px', margin: '0 auto', display: 'flex', display: { xs: 'none', md: 'flex' } }} endIcon={<SendTwoToneIcon />}>Hire Me</Button>
                </Toolbar>
            </AppBar>

            {/* nav for mobile devices show only in xs to md screen */}
            <nav>
                <Drawer
                    // container={container}
                    anchor={'top'}
                    variant='temporary' //temporary means any click anywhere will be removed automatically
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    )
}

export default Header
