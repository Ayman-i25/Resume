import { Box, Typography } from '@mui/material'
import React from 'react'
import './style.css'
const Title = ({title}) => {
  return (
    <div>
      <Typography display={'block'}  mb={2} variant='button' fontSize={'18px'} fontWeight={'bolder'} sx={{'&::before':{position:'absolute',content:"''",width:'110%',height:'30%',left:'-4px',bottom:'3px',background:'#ed6c02',zIndex:'-1',borderRadius:'3px'},position:'relative',width:'fit-content',zIndex:'1'}}>{title}</Typography>
    </div>
  )
}

export default Title
