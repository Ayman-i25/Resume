import React, { useState } from 'react';
import ContentBox from '../../Components/box/ContentBox';
import Title from '../../Components/Title/Title';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Grow, Tab, Tabs, Typography } from '@mui/material';
import { PortfolioData } from '../../utils/resumeData';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './Style.css';
import DialogCustom from '../../Components/DialogCustom/DialogCustom';

const Portfolio = () => {
  const [tabValue, setTabValue] = useState('All');
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  return (
    <ContentBox>
      <Title title={'Projects'} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Tabs
            indicatorColor='none'
            sx={{
              '& .MuiTab-root.Mui-selected': {
                color: 'orange', // text color of the selected tab
              },
              '& .MuiTouchRipple-root': {
                display: 'none', // disable the ripple effect
              },
            }}
            value={tabValue}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            onChange={(event, newValue) => setTabValue(newValue)}
          >
            <Tab label="All" value={'All'} />
            <Tab label="Web Development" value={'Web Development'} />
            <Tab label="Mobile Development" value={'Mobile Development'} />
            <Tab label="Graphic Design" value={'Graphic Design'} />
          </Tabs>
        </Grid>
        {PortfolioData.map((el, index) => (
          (el.category === tabValue || tabValue === 'All') && (
            <Grid key={index} item xs={12} sm={6} md={6} lg={4}>
              <Grow in timeout={1000}>
                <CardActionArea
                  sx={{
                    '&:hover .MuiCardActionArea-focusHighlight': {
                      background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,212,255,0) 100%)', // Change background color on hover
                      opacity: 1, // Apply opacity on hover
                      transition: 'background 0.3s ease-in-out, opacity 0.3s ease-in-out',
                    },
                    '& .MuiCardActionArea-focusHighlight': {
                      background: 'transparent', // Initial background color
                      opacity: 0, // Initial opacity
                      transition: 'background 0.3s ease-in-out, opacity 0.3s ease-in-out',
                    }
                  }}
                  onClick={() => handleClickOpen(el)}
                >
                  <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', position: 'relative', '&:hover .btnShow': { bottom: '45%' } }}>
                    <CardMedia sx={{ height: 140 }} image={el.img} />
                    <CardContent>
                      <Typography gutterBottom variant="button" fontWeight={'bold'} component="div">{el.title}</Typography>
                      <Typography variant="caption" color="text.secondary">{el.description.slice(0, 90)}...</Typography>
                    </CardContent>
                    <div className='btnShow'>
                      <VisibilityIcon fontSize='large' color='warning' />
                    </div>
                  </Card>
                </CardActionArea>
              </Grow>
            </Grid>
          )
        ))}
      </Grid>
      {selectedProject && (
        <DialogCustom open={open} handleClose={handleClose} data={selectedProject} />
      )}
    </ContentBox>
  );
};

export default Portfolio;
