import React from 'react'
import{Typography } from "@mui/material";
import { Box, Container } from "@mui/system"
import { styled} from '@mui/system' ;

import logoImg from "../../assets/logo.png"
import starImg from "../../assets/Star.png"
import logosImg from "../../assets/logos.png"

const Partner = () => {
    const CustomContainer=styled(Container)(({theme})=>({
        display:"flex",
        justifyContent:"space-between",
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            alignitems:"center",
            textAlign:'center',
            marginBottom:"theme.spacing(4)"
        }
    }))

    const CustomBox=styled(Box)(({theme})=>({
        [theme.breakpoints.down("md")]:{
            marginBottom:theme.spacing(4)

        }
    }))

  return (
    
    <Box sx={{mt:10}}>
        <CustomContainer>
            <CustomBox>
                <img src={logoImg} alt="logo" style={{maxWidth:"10%"}}/>
                <Typography
                variant='body2'
                sx={{
                    color:"#7D589",
                    fontSize:"16px",
                    fontWeight:"bold",
                    mt:2
                }}>
                    More than 45,000 trust FlavorFusion
                </Typography>

            </CustomBox>
            <Box>
                <img src={starImg} alt='star' style={{maxWidth:"100%"}}/>
                <Typography
                variant='body2'
                sx={{
                    color:"#7D8589",
                    fontSize:"16px",
                    fontWeight:"bold",
                    mt:2
                }}>
                    5-Star rating (2k+ reviews)
                </Typography>

            </Box>

        </CustomContainer>
        <Container sx={{display:"flex",flexDirection:"column"}}>
            <img src={logosImg} alt='logos'/>

        </Container>

    </Box>
  )
}

export default Partner