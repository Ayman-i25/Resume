import { Box, Button, Dialog, DialogContent, DialogTitle, Divider, IconButton, Slide, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
// import { TransitionProps } from '@mui/material/transitions';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const DialogCustom = ({ open, handleClose, data }) => {
    console.log(data)
    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <DialogTitle sx={{ m: 0, p: 2 }} >
                <IconButton
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"

                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>

                <Box display={'flex'} flexDirection={"column"} alignItems={"center"} justifyContent={'center'} textAlign={"center"} width={'100%'} height={'100%'}>
                    <img src={data.img} alt='pic' />
                    <Typography mt={1} variant={'h5'}>{data.title}</Typography>
                    <Typography my={3} maxWidth={'500px'} variant={'body1'}>{data.description}</Typography>
                    <Button sx={{padding:'5px 40px'}} variant={'contained'} color={'warning'} href={data.link} onClick={handleClose}>Live</Button>
                </Box>
            </DialogContent>
        </Dialog >

    )
}

export default DialogCustom
