import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
const Footer = () => {
  return (
    <Box mt="80px" >
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      {/* <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} /> */}
    </Stack>
    <Typography color={'#FFF'} variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">MuscleMentor |  © 2023 Anubhav. All rights reserved.</Typography>
  </Box>
  )
}

export default Footer