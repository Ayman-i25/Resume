import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './style.css'

const TimeLineCustom = ({ children, headerText, icon }) => {
  return (
    <>
      <Timeline className='timeline' sx={{ padding: '0px', alignItems: 'start' }}>
        {/* Header one */}
        <TimelineItem sx={{ '&::before': { display:'none' } }}>
          <TimelineSeparator sx={{ minHeight: '80px' }}>
            <TimelineDot sx={{boxShadow:'rgb(235 132 41 / 59%) 0px 4px 12px'}} color="warning">
              {icon}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography pt={'7px'} variant="h6" component="span">{headerText}</Typography>
          </TimelineContent>
        </TimelineItem>
        {children}
      </Timeline>
      {/* the time line  */}

    </>
  );
}

export default TimeLineCustom
