import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} my={2} p={3} borderRadius={'6px'} bgcolor={'#141414'} boxShadow={'rgba(0, 0, 0, 0.1) 0px 4px 12px'} sx={{flexDirection:{xs:'column', md:'row'}}}>
        <Typography variant='subtitle1' color={'GrayText'}>Ayman Ibrahim</Typography>
        <Box>
            <Typography variant='caption' color={'GrayText'}>&copy; All Rights Reserved. Designed by:</Typography>
            <Typography pl={1} variant='caption' component={'a'} href='https://www.instagram.com/ayman_i1/?igshid=YTQwZjQ0NmI0OA%3D%3D' color={'white'}>Ayman</Typography>
        </Box>
    </Box>
  )
}

export default Footer
