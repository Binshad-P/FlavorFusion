import React from 'react'
import{Typography } from "@mui/material";
import { Box,Container, typography } from "@mui/system"
import { styled} from '@mui/system' ;
import houseCard from '../../assets/ambience.jpg'
const Ambience = () => {
    const CustomBOx=styled(Box)(({theme})=>({
        display:"flex",
        gap:theme.spacing(10),
        alignItems:"center",
        [theme.breakpoints.down("md")]:{
            flexDirection:"coloumn",
            textAlign:"center"
        }
    }))
    const ImgContainer=styled(Box)(({theme})=>({
        width:"100%",
        [theme.breakpoints.down("md")]:{
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
        }
    }))
    const LargeText=styled(Typography)(({theme})=>({
        fontSize:"64px",
        color:"#000",
        fontWeight:"700",
        [theme.breakpoints.down("md")]:{
            fontSize:"32px"
        }
    }))
    const SmallText=styled(Typography)(({theme})=>({
        fontSize:"18px",
        color:"#7B8087",
        fontWeight:"500",
        [theme.breakpoints.down("md")]:{
            fontSize:"14px"
        }
    }))
    const TextFlexbox=styled(Box)(({theme})=>({
        marginTop:theme.spacing(7),
        display:"flex",
        justifyContent:"space-between",
        padding:theme.spacing(0,5,0,5),
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column",
            gap:theme.spacing(5)
        }
    }))
    const Divider =styled("div")(({theme})=>({
        width:"13%",
        height:"5px",
        backgroundColor:"#000339",
        [theme.breakpoints.down("md")]:{
            marginLeft:"25px",
            marginBottom:"15px"
            
        }
    }))
  return (
    <Box sx={{py:10}}>
        <Container>
            <CustomBOx>
                <ImgContainer>
                <img src={houseCard} alt='' style={{maxWidth:"100%"}}/>
                </ImgContainer>
                <Box>
                    <Divider/>
                    <typography
                    sx={{
                        fontSize:"35px",
                        color:"#000339",
                        fontWeight:"700",
                        my:3
                    }}>
                        You have found a ambiance you love.
                    </typography>
                    <typography
                    sx={{
                        fontSize:"16px",
                        color:"5A6473",
                        lineHeight:"27px"
                    }}>
                        Dsicover the epitome of cilinary excellence at savoria,where every visit is an
                        enhancing rendezvous with the art of dinig.
                    </typography>
                </Box>
            </CustomBOx>
            <TextFlexbox>
                
                <Box
               
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center"
                }}>
                    <LargeText>250+</LargeText>
                    <SmallText>Dishes</SmallText>
                </Box>
                <Box
               
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center"
                }}>
                    <LargeText>300+</LargeText>
                    <SmallText>Trusted clients</SmallText>
                </Box>
                <Box
               
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center"
                }}>
                    <LargeText>350+</LargeText>
                    <SmallText>Delivery per day</SmallText>
                </Box>
                
            </TextFlexbox>
        </Container>
    </Box>
  )
}

export default Ambience