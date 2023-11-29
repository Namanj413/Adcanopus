import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import mobileBg from "./assets/img/03.-Snowy-Mint_1.png";
import iphone from "./assets/img/iphoneimg.png";
import lines from "./assets/img/lines.png";
import exclusive from "./assets/img/freeexclu.png";
import leaft_iphone from "./assets/img/leaft_iphone.png";
import Typography from '@mui/material/Typography';
import getfree from "./assets/img/getfree.png";
import rightside from "./assets/img/rightside.png";
import progressActiveLine from "./assets/img/progressactive.png";
import progressActiveRemaningLine from "./assets/img/progressremaning.png";
import boyIcon from "./assets/img/boyicon.png";
import girlIcon from "./assets/img/girlicon.png";
import consolelogo from "./assets/img/consolelogo.png";
import whiteGirl from "./assets/img/whitegirl.png";
import whiteBoy from "./assets/img/WhiteBoy.png";
import blueBoy from "./assets/img/blueboy.png";
import blueGirl from "./assets/img/bluegirl.png";

import "./Home.css"
import { Container } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? 'transaparent' : 'transaparent',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: "none",
}));
function Home() {
    const [gender, setGender] = useState("")
    return (
        <>
            <Box container sx={{ width: "100vw", height: "100vh" }}>
                <br/>
                {/* Left side */}
                <Grid container spacing={2} sx={{ width: "100vw", height: "100vh" }}>
                    <Grid xs={12} md={7} >                       
                        <Box container spacing={3} sx={{ height: "100%" }} className="leftContainerBox" >
                            <br />
                            <Grid xs={0} md={1.5} sx={{}}>

                            </Grid>
                            <Grid xs={12} md={6.5} sx={{}}>
                            <div><img src={consolelogo} alt="logo" className="consoleImgLogo" style={{ marginLeft: "5%" }} /></div>

                                <Box sx={{ display: "flex", marginTop: "42px" }}>
                                    <div style={{ position: "absolute", height: "100%" }}>
                                        <img src={mobileBg} alt="Mobile img" style={{ height: "580px" }} />
                                    </div>
                                    <Box sx={{ display: "flex", position: "relative" }}>
                                        <div >
                                            <img src={lines} alt="Mobile img" style={{ marginTop: "20px" }} />
                                        </div>
                                        <div style={{ position: "absolute", height: "100%", paddingLeft: "20px" }}>
                                            <img src={iphone} alt="Mobile img" style={{ marginTop: "30%", marginLeft: "60px", height: "444px" }} />
                                        </div>
                                        <div style={{ position: "absolute", display: "flex", justifyContent: "start" }}>
                                            <img src={exclusive} alt="Mobile img" style={{ marginTop: "380px", height: "173px" }} />
                                        </div>
                                        <div style={{ position: "absolute", display: "flex" }}>
                                            <img src={leaft_iphone} alt="Mobile img" style={{ marginTop: "480px", marginLeft: "418px", height: "79.2px" }} />
                                        </div>
                                    </Box>


                                </Box>
                            </Grid>
                          
                            <Grid xs={12}  md={4} sx={{}} className="getFreeText">
                                <Box sx={{ alignItems: "center" }}>
                                    <img src={getfree} alt="getfree" style={{ marginTop: "310px", width: "280px" }} />
                                </Box>
                            </Grid>

                        </Box>
                        {/* <Item>xs=8</Item> */}
                    </Grid>
                   
                    <Grid xs={12} md={5} className="rightPanel">
                        <div className='rightPanelBgImgCtrl'>
                            <img src={rightside} alt="Mobile_img" className='rightImg'/>
                        </div>
                        <Box sx={{ display: "flex", color: "white", height: "100%", }} >

                            <Grid xs={2} md={2.5} sx={{ position: "relative" }}>
                            </Grid>
                            <Grid xs={10} md={9.5} sx={{ position: "relative" }}>
                                <Box sx={{ }} className="rightForm">
                                    <Typography sx={{ textAlign: "start", fontSize: "26px", color: "white", fontWeight: "bold" }}>
                                        Join Now
                                    </Typography>

                                    <Typography sx={{ textAlign: "start", fontSize: "16px", color: "#B0BAFD" }}>
                                        Where do we send the price ?
                                    </Typography>

                                    <Typography sx={{ textAlign: "start", fontSize: "16px", color: "#B0BAFD", display: "flex", gap: "9px", marginTop: "36px" }}>
                                        <div style={{ display: "flex", gap: "9px" }}>
                                            <img src={progressActiveLine} alt="activelines" />
                                        </div>
                                        <div style={{ display: "flex", gap: "9px" }}>
                                            <img src={progressActiveRemaningLine} alt="activelines" />
                                            <img src={progressActiveRemaningLine} alt="activelines" />
                                            <img src={progressActiveRemaningLine} alt="activelines" />
                                            <img src={progressActiveRemaningLine} alt="activelines" />
                                            <img src={progressActiveRemaningLine} alt="activelines" />
                                        </div>
                                    </Typography>

                                    <Typography sx={{ textAlign: "start", fontSize: "26px", marginTop: "35px", color: "white", fontWeight: "bold" }}>
                                        Congratulation!
                                    </Typography>
                                    <Typography sx={{ textAlign: "start", fontSize: "16px", marginTop: "9px", color: "#B0BAFD" }}>
                                        Enter winning data now
                                    </Typography>
                                    <Box  className="Signupform">

                                        <Typography sx={{ textAlign: "start", marginTop: "9px", color: "#B0BAFD", display: "flex", justifyContent: "space-evenly", cursor: "pointer" ,width:"95%"}} >
                                            <div className={gender === "Male" ? "Genderactive" : "Genderainctive"} style={{ width: "48%", display: "flex", justifyContent: "center", borderRadius: "15px", height: "47px", alignItems: "center", fontWeight: "bold", fontSize: "20px" }} onClick={(e) => { (setGender("Male")) }}>
                                                <img src={gender === "Male" ? blueBoy : whiteBoy} alt="gendericon" style={{ height: "30px" }} /> &nbsp; Male
                                            </div>
                                            <div className={gender === "Female" ? "Genderactive" : "Genderainctive"} style={{ width: "48%", display: "flex", height: "30px" ,justifyContent: "center", borderRadius: "15px", height: "47px", alignItems: "center", fontWeight: "bold", fontSize: "20px" }} onClick={(e) => { (setGender("Female")) }}>
                                                <img src={gender === "Female" ? blueGirl : whiteGirl} alt="gendericon" style={{ height: "30px", color: "white" }} /> &nbsp; Female
                                            </div>
                                        </Typography>
                                       

                                        <Grid container spacing={1} sx={{marginTop: "9px"}}>
                                            <Grid xs={12} sm={6} md={6} >
                                                <input className='inputCss' type="text" placeholder='First Name' style={{ width: "93%", borderRadius: "10px", height: "45px", backgroundColor: "transparent", color: "white", fontWeight: "bold", textAlign: "center" }} />
                                            </Grid>
                                            <Grid xs={12} sm={6} md={6}>
                                                <input className='inputCss' type="text" placeholder='Last Name' style={{ width: "93%", borderRadius: "10px", height: "45px", backgroundColor: "transparent", color: "white", fontWeight: "bold", textAlign: "center" }} />

                                            </Grid>
                                        </Grid>
                                         
                                        <Grid container spacing={1} sx={{marginTop: "9px"}}>
                                            <Grid xs={12} >
                                                <input className='inputCss' type="email" required="true" placeholder='Abx@gmail.com' style={{ width: "93%", borderRadius: "10px", height: "45px", backgroundColor: "transparent", color: "white", fontWeight: "bold", textAlign: "Start" }} />
                                            </Grid>

                                        </Grid>
                                        <Grid container spacing={2} sx={{ marginTop: "28px" }}>
                                            <Grid xs={2} md={6}>
                                            </Grid>
                                            <Grid xs={8} md={6}>
                                                <button style={{ width: "93%", height: "54px", backgroundColor: "#425AEF", color: "white", fontWeight: "bold", border: "none", borderRadius: "13px", fontSize: "18px", alignItems: "center", cursor: "pointer" }}>Join For Free  &nbsp; <span style={{ fontSize: "32px", paddingTop: "40px" }}>&rarr;</span></button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Home