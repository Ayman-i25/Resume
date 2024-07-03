import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab"
import { Typography } from "@mui/material"

const TimeLineItemCustom = ({ title, connector = 'true', ProfileRowText, year, caption  }) => {
    return (
        <TimelineItem sx={{ '&::before': { display: 'none' }, minHeight: '50px', paddingLeft: '13px' }}>
            <TimelineSeparator>
                <TimelineDot variant='outlined' color="warning" />
                {connector && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{paddingRight:'0px'}}>
                <Typography  fontSize={'15px'} fontWeight={'bold'} component={'span'}>{title}  {ProfileRowText && <Typography component={'span'} color={'GrayText'} fontSize={'14px'} >: {ProfileRowText}</Typography>}</Typography>
                {year && <Typography fontSize={'13px'} fontWeight={'500'} color={'#913000'}>{year}</Typography>}
                {caption && <Typography fontSize={'small'} color={'GrayText'} >{caption}</Typography>}
            </TimelineContent>
        </TimelineItem>
    )
}

export default TimeLineItemCustom
