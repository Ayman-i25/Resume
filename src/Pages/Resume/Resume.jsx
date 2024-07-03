import React from 'react'
import ContentBox from '../../Components/box/ContentBox'
import Title from '../../Components/Title/Title'
import { Box, Grid } from '@mui/material'
import TimeLineCustom from '../../Components/TimeLineCustom/TimeLineCustom'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TimeLineItemCustom from '../../Components/TimeLineCustom/TimeLineItemCustom'
import { EducationData, WorkingHistoryData } from '../../utils/resumeData'
import SchoolIcon from '@mui/icons-material/School';
const Resume = () => {
  return (
    <>
    <ContentBox >
        {/* Resume section */}
        <Box mb={4}>
            <Title title={'Resume'} />
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TimeLineCustom headerText={'Working History'} icon={<BusinessCenterIcon />}>
                        {WorkingHistoryData.map((el, index) => (
                            <Box key={index}>
                                <TimeLineItemCustom
                                    title={el.title}
                                    year={el.date}
                                    caption={el.description}
                                    />
                            </Box>
                        ))}
                    </TimeLineCustom>
                </Grid>
                <Grid item xs={12} md={6}>
                <TimeLineCustom headerText={'Education History'} icon={<SchoolIcon />}>
                        {EducationData.map((el, index) => (
                            <Box key={index}>
                                <TimeLineItemCustom
                                    title={el.university}
                                    year={el.date}
                                    caption={el.description}
                                    />
                            </Box>
                        ))}
                    </TimeLineCustom>
                </Grid>
            </Grid>
        </Box>
    </ContentBox>
    </>
  )
}

export default Resume
