import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ContentBox from '../box/ContentBox'
import profileimg from '../../assets/Images/profile.jpg'
import TimeLineCustom from '../TimeLineCustom/TimeLineCustom'
import TimeLineItemCustom from '../TimeLineCustom/TimeLineItemCustom'
import { ProfileData } from '../../utils/resumeData'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
const Profile = () => {
    return (
        <Box py={2} sx={{ background:'white', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', borderRadius:'8px', }}>
            {/* <ContentBox> */}
                <Box display={'flex'} flexDirection={'column'}  pl={2}>
                    <Typography variant='button' fontSize={'20px'}>{ProfileData.name}</Typography>
                    <Typography variant='caption' color={'GrayText'}>{ProfileData.specialty}</Typography>
                </Box>
                <Box sx={{ marginTop: '-15px', width: '100%', height: '300px', clipPath: 'polygon(0 13%, 100% 0, 100% 89%, 0 99%)' }}>
                    <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={profileimg} alt="Profile" />
                </Box>
                <Box marginTop={'-33px'}  pl={2}>
                    <TimeLineCustom icon={<PermIdentityIcon />}>
                        <TimeLineItemCustom title={'Name'} ProfileRowText={ProfileData.name} />
                        <TimeLineItemCustom title={'BirthDay'} ProfileRowText={ProfileData.brethday} />
                        <TimeLineItemCustom title={'Job'} ProfileRowText={ProfileData.job} />
                        <TimeLineItemCustom title={'Email'} ProfileRowText={ProfileData.email} />
                        <TimeLineItemCustom title={'phone'} ProfileRowText={ProfileData.phone} connector={false}/>
                    </TimeLineCustom>
                </Box>
                <Button color='warning' variant='contained' sx={{px:'30px',borderRadius:'24px', margin:'0 auto',display:'flex'}} endIcon={<ArrowCircleDownTwoToneIcon />}>Send</Button>

            {/* </ContentBox> */}
        </Box>
    )
}

export default Profile
