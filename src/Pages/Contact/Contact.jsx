import React from 'react'
import ContentBox from '../../Components/box/ContentBox'
import Title from '../../Components/Title/Title'
import { Box, Button, Divider, Grid, TextField, TextareaAutosize, Typography } from '@mui/material'
import { ContactInfo } from '../../utils/resumeData'
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Contact = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 14
      };
    return (
        <ContentBox>
            <Box>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        {/* Contact form */}
                        <Title title={'Contact Form'} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth color='warning' id="standard-basic" label="Subject" variant="standard" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth color='warning' id="standard-basic" label="Your Name" variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth color='warning' id="standard-basic" label="Your Name" variant="outlined" multiline minRows={8} />
                            </Grid>
                            <Grid item xs={12}>
                                <Button color='warning' variant='contained' sx={{px:'30px',borderRadius:'24px'}} size='large'>Send</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* Contact info */}
                        <Title title={'Contact information'} />
                        {Object.keys(ContactInfo).map((key) => (
                            <Box display={'flex'} flexDirection={'row'} alignItems={"center"} gap={1}>
                                <Typography my={1} display={'flex'} variant="button" fontWeight={'bold'}>{key} : </Typography>
                                <Typography variant='caption' color={'GrayText'}>{ContactInfo[key]}</Typography>

                            </Box>
                        ))}

                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ height: '400px' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            >
                                <Box
                                    lat={59.955413}
                                    lng={30.337844}
                                    
                                ><LocationOnIcon color='warning'/></Box>
                            </GoogleMapReact>
                        </Box>

                    </Grid>
                    </Grid>
            </Box>
        </ContentBox>
    )
}

export default Contact
