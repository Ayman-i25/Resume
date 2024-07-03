import React from 'react'
import ContentBox from '../../Components/box/ContentBox'
import Title from '../../Components/Title/Title'
import { Box, Divider, Grid, LinearProgress, Typography } from '@mui/material'
import IntegrationInstructionsTwoToneIcon from '@mui/icons-material/IntegrationInstructionsTwoTone';
import LibraryAddCheckTwoToneIcon from '@mui/icons-material/LibraryAddCheckTwoTone';
import BrushTwoToneIcon from '@mui/icons-material/BrushTwoTone';
import OfflineBoltTwoToneIcon from '@mui/icons-material/OfflineBoltTwoTone';
import { DesignSkillsData, ProgrammSkillsData, ServiceData } from '../../utils/resumeData';
const Home = () => {
  return (
    <ContentBox>
      {/* About me section */}
      <Box mb={4}>
        <Title title={'About Me'} />
        <Typography fontSize={'small'} variant='subtitle1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias sint pariatur ab incidunt quo minima, temporibus ipsam eaque exercitationem nisi enim? Minus voluptatem saepe quibusdam, odio debitis error quod dolorem. <br /><br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias sint pariatur ab incidunt quo minima, temporibus ipsam eaque exercitationem nisi enim? Minus voluptatem saepe quibusdam, odio debitis error quod dolorem.</Typography>
      </Box>
      {/* Service section */}
      <Box my={4}>
        <Title title={'My Service'} />
        <Grid container spacing={2} justifyContent={'center'}>
          {ServiceData.map(({ icone: Icon, name }, index) => (
            <Grid key={index} item sx={12} sm={6} lg={3} >
              <ContentBox>
                <Box sx={{ minHeight: '100px', textAlign: { xs: 'center', md: 'start' } }}>
                  <Icon fontSize='large' color='warning' />
                  <Typography my={1} variant='subtitle2' fontWeight={'bold'}>{name}</Typography>
                  <Typography color={'grayText'} variant='caption'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Typography>
                </Box>
              </ContentBox>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Skill Section */}
      <Box my={4}>
        <Title title={'Skills'} />
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} flexDirection={'column'}>
            <Typography  variant={'h5'}>Design</Typography>
            <Divider />
            {ProgrammSkillsData.map((skill, index) => (
              <>
                <Typography display={'block'} px={1} mt={2} variant={'button'}>{skill.skill}</Typography>
                <LinearProgress color='warning' variant='determinate' sx={{ height: '5px', borderRadius: '4px' }} value={skill.rate} />
              </>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} flexDirection={'column'}>
            <Typography  variant={'h5'}>Code</Typography>
            <Divider />
            {DesignSkillsData.map((skill, index) => (
              <>
                <Typography display={'block'} px={1} mt={2} variant={'button'}>{skill.skill}</Typography>
                <LinearProgress color='warning' variant='determinate' sx={{ height: '5px', borderRadius: '4px' }} value={skill.rate} />
              </>
            ))}
          </Grid>
        </Grid>
      </Box>
    </ContentBox>
  )
}

export default Home
