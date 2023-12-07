import React from 'react'
import{ Box, Button, Typography } from "@mui/material";
import { styled} from '@mui/system' ;
import { Container } from "@mui/system" 
import CustomButton from '../../components/CustomButton/CustomButton';
import welcome from '../../assets/welcome.png'
const Welcome = () => {
    const CustomBox =styled(Box)(({theme})=>({
        display:"flex",
        justifyContent:"center",
        gap: theme.spacing(5),
        marginTop:theme.spacing(3),
        [theme.breakpoints.down('md')]:{
            flexDirection:"column",
            alignItems:"center",
            textAlign:"center",
        },
    }))
    const Title = styled(Typography)(({theme})=>({
        fontSize:"64px",
        color:"#fff",
        fontWeight:"bold",
        [theme.breakpoints.down("sm")]:{
            fontSize:"40px"
        },
    }))
  return (
    <Box sx={{background:"#FED801",minHeight:"80vh"}}>
        <Container>
        <CustomBox>
            <Box sx={{flex:'1'}}>
                <Typography
                variant='body2'
                sx={{
                    fontSize:"18px",

                    color:"#687690",
                    fontWeight:"500",
                    mt:10,
                    mb:4
                   
                }}
                >Welcome to FlavorFusion Restorent</Typography>
                <Title variant='h1'>
                    Discover a place where you will love to Eat.
                </Title>
                <Typography
                variant='body2'
                sx={{fontSize:"18px",color:"#5A6473",my:4}}>
                    immerse yourself in the elegant ambiance as you savor each bite,accompained by our extensive seletion of hand-picked wines
                    and carefully curated cocktails.
                </Typography>
                <CustomButton
                backgroundColor="#0F1B4c"
                color="#fff"
                ButtonText="More About Us"
                welcomeBtn={true}/>

            </Box>
            <Box sx={{flex:"1.25"}}>
                <img 
                src={welcome}
                alt='welcome'
                style={{maxWidth:"100%",marginBottom:"2rem"}}/>

            </Box>

        </CustomBox>
        </Container>
        
    </Box>
  )
}

export default Welcome