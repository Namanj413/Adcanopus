import React, { useEffect, useState } from 'react'
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
import TextField from '@mui/material/TextField';


import { Button, Container } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? 'transaparent' : 'transaparent',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: "none",
}));


const activeLines = (step) => {
    const activeTimes = step; // Declare a variable for the number of times you want to create the component

    return (
        <>
            {[...Array(activeTimes)].map((_, i) => (
                <Box
                    key={i}
                    component="img"
                    sx={{

                        width: { xs: "10vw", sm: "9vw", md: "4vw", mm: "8.5vw", lm: "9.5vw", md: "4vw", lg: "4.5vw", xl: "4.5vw" },
                        height: { xs: "1vh", sm: "1vh", md: "1vh", mm: "1vh", lm: "1vh", md: "1vh", lg: "1.5vh", xl: "1.5vh" },
                    }}
                    alt="activelines"
                    src={progressActiveLine}
                />
            ))}
        </>
    );
}
const inactiveLines = (step) => {
    const inactiveTimes = 6 - step; // Declare a variable for the number of times you want to create the component

    return (
        <>
            {[...Array(inactiveTimes)].map((_, i) => (
                <Box
                    key={i}
                    component="img"
                    sx={{

                        width: { xs: "10vw", sm: "9vw", md: "4vw", mm: "8.5vw", lm: "9.5vw", md: "4vw", lg: "4.5vw", xl: "4.5vw" },
                        height: { xs: "1vh", sm: "1vh", md: "1vh", mm: "1vh", lm: "1vh", md: "1vh", lg: "1.5vh", xl: "1.5vh" },

                    }}
                    alt="activelines"
                    src={progressActiveRemaningLine}
                />
            ))}
        </>
    );
}


function Home2() {
    const [gender, setGender] = useState("")
    const [step, setStep] = useState(Number(localStorage.getItem("step")) || 1)

    async function nextStep(e) {
        if (step <= 5 || step > 0) {
           if(step===6){

           }else{
            const tempp = step + 1;
            await setStep(tempp);

            localStorage.setItem("step", tempp)
           }

        }

    }

    async function backStep(e) {
        if (step > 1) {
            const tempp = step - 1;
            await setStep(tempp);

            localStorage.setItem("step", tempp)
        }
    }
    useEffect(() => {

        console.log(step);
    })
    return (
        <>
            <Box container sx={{ maxWidth: "100vw", maxHeight: "30vh", display: "flex", justifyContent: "center", visibility: { xs: "visible", sm: "hidden" } }}>
                <Typography sx={{ color: "red" }}> This screen size is not supported please use above 320px width devices</Typography>
            </Box>
            <Box container sx={{ maxWidth: "100vw", maxHeight: "100vh", visibility: { xs: "hidden", sm: "visible" } }}>
                <br />
                {/* Left side */}
                <Grid container spacing={2} sx={{ width: "100%", height: "100%" }}>
                    {/* Left side */}
                    <Grid xs={12} md={7} >
                        <Box>
                            {/* <div><img src={consolelogo} alt="logo" className="consoleImgLogo" style={{ marginLeft: "5%" }} /></div> */}
                            <Box component="div" sx={{ display: "flex" }} >
                                <Box
                                    component="img"
                                    sx={{
                                        width: { xs: "20.5vw", sm: "40.5vw", mm: "30.5vw", lm: "30.5vw", md: "20.5vw", lg: "20.5vw", xl: "20.5vw" },
                                        // marginTop: { xs: "60px", sm: "12vh", mm: "12vh", lm: "13.5vh", md: "95px", lg: "95px", xl: "21vh" },
                                        marginLeft: { xs: "0px", sm: "5%", mm: "5%", lm: "5%", md: "5%", lg: "5%", xl: "5%" },
                                        padding: { xs: "10px 0px 10px 0px", sm: "10px 0px 10px 0px", mm: "10px 0px 10px 0px", lm: "10px 0px 10px 0px", md: "10px 0px 10px 0px", lg: "10px 0px 10px 0px", xl: "10px 0px 10px 0px" }

                                    }}
                                    alt="Console_Log"
                                    src={consolelogo}
                                />
                                {/* <img src={iphone} alt="Mobile img" style={{ marginTop: "30%", marginLeft: "60px", height: "444px" }} /> */}
                            </Box>
                            <Grid sx={{ width: "100%", height: "100%", display: "flex" }}>
                                {/* Left 1 started */}
                                <Grid xs={12} md={7} lg={7} sx={{  overflow: "hidden" }} >
                                    <Box sx={{ overflow: "hidden", display: "flex", width: "100%", height: "100%" }}>
                                        <Box sx={{ width: "100%", height: "100%", display: "flex", position: "relative" }}>
                                            <Box
                                                component="img"
                                                sx={{
                                                    maxWidth: { sm: "50vw", mm: "50vw", lm: "50vw", md: "28vw", lg: "25vw" }
                                                }}
                                                alt="Mobile_BG"
                                                src={mobileBg}
                                            />
                                            <Box sx={{ display: "flex", position: "absolute" }}>
                                                <Box component="div" sx={{ display: "flex", position: "absolute" }} >
                                                    <Box
                                                        component="img"
                                                        sx={{
                                                            width: { xs: "0", sm: "25vw", mm: "22vw", lm: "22vw", md: "12.5vw", lg: "11vw", xl: "12vw" },
                                                            marginTop: { xs: "0px", sm: "2vh", lm: "2vh", md: "17px", lg: "20px", xl: "4vh" },
                                                            // marginLeft: {xs:"40px", sm:"40px",md:"40px",lg:"40px"}

                                                        }}
                                                        alt="Mobile_BG"
                                                        src={lines}
                                                    />
                                                </Box>
                                                <Box component="div" sx={{ display: "flex", position: "absolute" }} >
                                                    <Box
                                                        component="img"
                                                        sx={{
                                                            width: { xs: "8vw", sm: "24vw", mm: "27vw", lm: "27vw", md: "14.5vw", lg: "14vw", xl: "14vw" },
                                                            marginTop: { xs: "60px", sm: "12vh", mm: "12vh", lm: "13.5vh", md: "95px", lg: "95px", xl: "21vh" },
                                                            marginLeft: { xs: "0px", sm: "6vw", mm: "6vw", lm: "6vw", md: "40px", lg: "4vw", xl: "4vw" }

                                                        }}
                                                        alt="Mobile_BG"
                                                        src={iphone}
                                                    />
                                                    {/* <img src={iphone} alt="Mobile img" style={{ marginTop: "30%", marginLeft: "60px", height: "444px" }} /> */}
                                                </Box>
                                                <Box component="div" sx={{ display: "flex", position: "absolute" }} >
                                                    {/* <img src={exclusive} alt="Mobile img" style={{
                                                         marginTop: {xs:"290px", sm:"290px",md:"290px",lg:"290px"},
                                                           height: "173px" }} /> */}
                                                    <Box
                                                        component="img"
                                                        sx={{
                                                            marginTop: { xs: "0vh", sm: "20.5vh", mm: "25vh", lm: "28vh", md: "27.5vh", lg: "34vh", xl: "50vh" },
                                                            height: { xs: "7vh", sm: "8vh", md: "10.5vh", mm: "8.5vh", lm: "10vh", md: "11vh", lg: "11vh", xl: "14vh" },
                                                        }}
                                                        alt="Mobile_BG"
                                                        src={exclusive}
                                                    />
                                                </Box>
                                                <Box component="div" sx={{ display: "flex", position: "absolute" }} >
                                                    <Box
                                                        component="img"
                                                        sx={{
                                                            marginTop: { xs: "0", md: "32vh", lg: "34vh", xl: "52vh" },
                                                            width: { xs: "0", md: "8vw", xl: "7vw" },
                                                            marginLeft: { xs: "0", md: "24vw", lg: "20vw", xl: "21vw" }
                                                        }}
                                                        alt="Leaf_img"
                                                        src={leaft_iphone}
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                {/* Left 2 started */}
                                <Grid xs={12} md={5} lg={5} sx={{  }}>
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>

                                        <Box
                                            component="img"
                                            sx={{
                                                width: { xs: "0vw", sm: "24vw", mm: "27vw", lm: "27vw", md: "14.5vw", lg: "14vw", xl: "14vw" },
                                                marginTop: { xs: "10vh", sm: "12vh", mm: "12vh", lm: "13.5vh", md: "95px", lg: "95px", xl: "21vh" },
                                            }}
                                            alt="Leaf_img"
                                            src={getfree}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>



                    {/* right  panel*/}
                    <Grid xs={12} md={5} sx={{  visibility: { xs: "none", sm: "visible" } }} >
                        <Box sx={{ width: "100%", height: "100%", display: "flex", position: "relative",overflow: "hidden" }}>
                            <Box
                                component="img"
                                sx={{
                                    width: { sm: "100%", mm: "100%", lm: "100%", md: "100%", lg: "100%" },
                                    height: { sm: "100%", mm: "100%", lm: "100%", md: "100%", lg: "100%" }
                                }}
                                alt="Mobile_BG"
                                src={rightside}
                            />
                            <Box sx={{
                                display: "flex", position: "absolute",  width: { sm: "100%", mm: "100%", lm: "100%", md: "100%", lg: "100%" },
                                height: { sm: "100%", mm: "100%", lm: "100%", md: "100%", lg: "100%" }
                            }}>
                                {/*  right form data  */}
                                <Grid container spacing={2} sx={{ height: "100vh", width: "100%", position: "relative", overflow: "hidden" }}>
                                    <Grid xs={2} md={2} sx={{  }}>
                                    </Grid>
                                    <Grid xs={10} md={10} sx={{ }}>
                                        <Box sx={{position: "relative", marginTop: { sm: "4vh", mm: "4vh", lm: "4vh", md: "8vh", lg: "9vh", xl: "12vh" }, height: { sm: "100%", mm: "100%", lm: "100%", md: "100%", lg: "100%" } }} >
                                            <Typography sx={{
                                                textAlign: "start",
                                                fontSize: {
                                                    xs: "0px", sm: "14px", mm: "18px", lm: "20px", md: "16px", lg: "24px", xl: "26px"
                                                },
                                                color: "white", fontWeight: "bold"
                                            }}>
                                                Join Now
                                            </Typography>
                                            <Typography sx={{
                                                textAlign: "start", fontSize: {
                                                    xs: "0px", sm: "10px", mm: "11px", lm: "14px", md: "9px", lg: "15px", xl: "17px"
                                                }, color: "#B0BAFD",

                                            }}>
                                                Where do we send the price ?
                                            </Typography>
                                            <Box disablegutters component="div" sx={{ display: "flex", position: "absolute", gap: "2px", marginTop: "10px" }} >
                                                {/* <img src={exclusive} alt="Mobile img" style={{
                                                         marginTop: {xs:"290px", sm:"290px",md:"290px",lg:"290px"},
                                                           height: "173px" }} /> */}
                                                <Box component="div" sx={{ display: "flex", gap: "2px" }} >
                                                    {activeLines(step)}
                                                </Box>
                                                <Box component="div" sx={{ display: "flex", gap: "2px" }} >
                                                    {inactiveLines(step)}
                                                </Box>
                                            </Box>
                                            <Typography sx={{
                                                textAlign: "start",
                                                fontSize: {
                                                    xs: "0px", sm: "14px", mm: "18px", lm: "20px", md: "16px", lg: "24px", xl: "26px"
                                                }, color: "white", fontWeight: "bold", marginTop: "4.5vh"
                                            }}>
                                                Congratulation!
                                            </Typography>
                                            <Typography sx={{
                                                textAlign: "start", fontSize: {
                                                    xs: "0px", sm: "10px", mm: "11px", lm: "14px", md: "9px", lg: "15px", xl: "17px"
                                                }, color: "#B0BAFD"
                                            }}>
                                                Enter winning data now
                                            </Typography>
                                            <Box >
                                                {/* Step */}
                                                {step === 1 && <>
                                                    <Box component="div" sx={{ display: "flex", marginTop: "10px", justifyContent: "space-evenly" }} >

                                                        <Box component="div" sx={{
                                                             borderRadius: "15px", display: "flex",
                                                            justifyContent: "center", alignItems: "center", color: gender === "Male" ? "black" : "white"
                                                            , backgroundColor: gender === "Male" ? "white" : "transaparent",
                                                            height: { xs: "0vw", sm: "4vh", mm: "4.5vh", lm: "5vh", md: "5vh", lg: "6vh", xl: "6vh" }
                                                            , width: { xs: "0vw", sm: "40%", mm: "40%", lm: "40%", md: "40%", lg: "40%", xl: "40%" }
                                                        }} onClick={(e) => { (setGender("Male")) }} >
                                                            <Box
                                                                component="img"
                                                                sx={{
                                                                    width: { xs: "0px", sm: "20px", mm: "23px", lm: "20px", md: "20px", lg: "30px", xl: "30px" },

                                                                }}
                                                                alt="Leaf_img"
                                                                src={gender === "Male" ? blueBoy : whiteBoy}
                                                            /> <Typography sx={{
                                                                textAlign: "start", fontSize: {
                                                                    xs: "0px", sm: "13px", mm: "14px", lm: "16px", md: "12px", lg: "17px", xl: "17px"
                                                                }, color: gender === "Male" ? "black" : "white"
                                                            }}>
                                                                &nbsp;Male
                                                            </Typography>
                                                        </Box>
                                                        <Box component="div" sx={{
                                                         borderRadius: "15px", display: "flex",
                                                            justifyContent: "center", alignItems: "center", backgroundColor: gender === "Female" ? "white" : "transaparent",
                                                            height: { xs: "0vw", sm: "4vh", mm: "4.5vh", lm: "5vh", md: "5vh", lg: "6vh", xl: "6vh" }
                                                            , width: { xs: "0vw", sm: "40%", mm: "40%", lm: "40%", md: "40%", lg: "40%", xl: "40%" }
                                                        }} onClick={(e) => { (setGender("Female")) }} >
                                                            <Box
                                                                component="img"
                                                                sx={{
                                                                    width: { xs: "0px", sm: "20px", mm: "23px", lm: "20px", md: "20px", lg: "30px", xl: "30px" },

                                                                }}
                                                                alt="Leaf_img"
                                                                src={gender === "Female" ? blueGirl : whiteGirl}
                                                            /> <Typography sx={{
                                                                textAlign: "start", fontSize: {
                                                                    xs: "0px", sm: "13px", mm: "14px", lm: "16px", md: "12px", lg: "17px", xl: "17px"
                                                                }, color: gender === "Female" ? "black" : "white"
                                                            }}>
                                                                &nbsp;Female
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Grid container spacing={1} sx={{ marginTop: "9px" }}>
                                                        <Grid xs={12} sm={12} md={12} >
                                                            <Box component="div" sx={{
                                                                display: "flex", width: "100%", height: {
                                                                    xs: "0vw", sm: "3.5vh", mm: "4vh", lm: "5vh", md: "4vh", lg: "6vh", xl: "6vh"
                                                                }, justifyContent: "space-evenly"
                                                            }}>
                                                                <input type="text" placeholder='First Name' style={{ width: "40%", borderRadius: "10px", height: "100%",border:"1px solid #4051BC", backgroundColor: "transparent", color: "white", fontWeight: "bold", textAlign: "start" }} />
                                                                <input type="text" placeholder='First Name' style={{ width: "40%", borderRadius: "10px", height: "100%",border:"1px solid #4051BC", backgroundColor: "transparent", color: "white", fontWeight: "bold", textAlign: "start" }} />
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container spacing={1} sx={{ marginTop: "9px" }}>
                                                        <Grid xs={12} sm={12} md={12} >
                                                            <Box component="div" sx={{
                                                                display: "flex", width: "100%", height: {
                                                                    xs: "0vw", sm: "3.5vh", mm: "4vh", lm: "5vh", md: "4vh", lg: "6vh", xl: "6vh"
                                                                }, justifyContent: "center"
                                                            }}>
                                                                <input type="email" placeholder='Xyz@gmail.com' style={{ width: "88%", borderRadius: "10px", height: "100%",border:"1px solid #4051BC", backgroundColor: "transparent", color: "white", fontWeight: "bold", textAlign: "start" }} />
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </>}


                                                {/* Step 2 */}
                                                {step === 2 && <>

                                                    <Grid container spacing={1} sx={{ marginTop: "9px" }}>
                                                        <Grid xs={12} sm={12} md={12} >
                                                            <Box component="div" sx={{
                                                                display: "flex", width: "100%", height: {
                                                                    xs: "0vw", sm: "3.5vh", mm: "4vh", lm: "5vh", md: "4vh", lg: "6vh", xl: "6vh"
                                                                }, justifyContent: "space-evenly"
                                                            }}>
                                                                <input type="text" placeholder='Pin Code' style={{ width: "40%", borderRadius: "10px",border:"1px solid #4051BC", height: "100%", backgroundColor: "transparent", color: "white", fontWeight: "bold", textAlign: "center" }} />
                                                                <input type="text" placeholder='Address' style={{ width: "40%", borderRadius: "10px",border:"1px solid #4051BC", height: "100%", backgroundColor: "transparent", color: "white", fontWeight: "bold", textAlign: "center" }} />
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container spacing={1} sx={{ marginTop: "9px" }}>
                                                        <Grid xs={12} sm={12} md={12} >
                                                            <Box component="div" sx={{
                                                                display: "flex", width: "100%", height: {
                                                                    xs: "0vw", sm: "3.5vh", mm: "4vh", lm: "5vh", md: "4vh", lg: "6vh", xl: "6vh"
                                                                }, justifyContent: "center"
                                                            }}>
                                                                <input type="text" placeholder='City' style={{ width: "88%", borderRadius: "10px",border:"1px solid #4051BC", height: "100%", backgroundColor: "transparent", color: "white", fontWeight: "bold", textAlign: "center" }} />
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container spacing={1} sx={{ marginTop: "9px" }}>
                                                        <Grid xs={12} sm={12} md={12} >
                                                            <Box component="div" sx={{
                                                                display: "flex", width: "100%", height: {
                                                                    xs: "0vw", sm: "3.5vh", mm: "4vh", lm: "5vh", md: "4vh", lg: "6vh", xl: "6vh"
                                                                }, justifyContent: "space-evenly"
                                                            }}>
                                                                <input type="date" placeholder='Date' style={{ width: "40%", borderRadius: "10px",border:"1px solid #4051BC", height: "100%", backgroundColor: "transparent", color: "white", fontWeight: "bold", textAlign: "center" }} />
                                                                <input type="number" placeholder='Mobile No.' style={{ width: "40%", borderRadius: "10px",border:"1px solid #4051BC", height: "100%", backgroundColor: "transparent", color: "white", fontWeight: "bold", textAlign: "center" }} />
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </>}
                                                <Grid container spacing={2} sx={{ marginTop: "8px" }}>
                                                    <Grid xs={6} md={6}>
                                                        {step != 1 && <>
                                                            <Box sx={{ width: "90%" }}>
                                                                <Button sx={{
                                                                    backgroundColor: "transaparent",
                                                                    color: "white", fontWeight: "bold", border: "none", borderRadius: "13px", fontSize: "12px", alignItems: "center", cursor: "pointer", display: "flex", textTransform: "none"
                                                                    , height: {
                                                                        xs: "0vw", sm: "4.5vh", mm: "4.5vh", lm: "5vh", md: "5vh", lg: "6vh", xl: "6vh"
                                                                    }, width: {
                                                                        xs: "0vw", sm: "100%", mm: "100%", lm: "100%", md: "100%", lg: "100%", xl: "100%"
                                                                    },
                                                                    fontSize: {
                                                                        xs: "0px", sm: "17px", mm: "20px", lm: "19px", md: "16px", lg: "26px", xl: "30px"
                                                                    }
                                                                }} onClick={(e) => { (backStep(e)) }}>   &larr; &nbsp; <Box component="span" sx={{
                                                                    fontSize: {
                                                                        xs: "0px", sm: "8px", mm: "8px", lm: "9px", md: "6px", lg: "10px", xl: "13px"
                                                                    }, paddingTop: {
                                                                        xs: "0px", sm: "3px", mm: "3px", lm: "3px", md: "1px", lg: "3px", xl: "4px"
                                                                    }
                                                                }}> Back</Box></Button>
                                                            </Box> </>}
                                                    </Grid>
                                                    <Grid xs={6} md={6}>
                                                       {step!==6  && <>
                                                       
                                                        <Box sx={{ width: "90%",}}>
                                                            <Button sx={{
                                                                backgroundColor: "#425AEF", boxShadow: "#425AEF 0px 13px 27px -5px, #425AEF 0px 8px 16px -8px;",
                                                                color: "white", fontWeight: "bold", border: "none", borderRadius: "13px", fontSize: "12px", alignItems: "center", cursor: "pointer", display: "flex", textTransform: "none"
                                                                , height: {
                                                                    xs: "0vw", sm: "4.5vh", mm: "4.5vh", lm: "5vh", md: "5vh", lg: "6vh", xl: "6vh"
                                                                }, width: {
                                                                    xs: "0vw", sm: "100%", mm: "100%", lm: "100%", md: "100%", lg: "100%", xl: "100%"
                                                                }, fontSize: {
                                                                    xs: "0px", sm: "8px", mm: "8px", lm: "9px", md: "6px", lg: "10px", xl: "13px"
                                                                }
                                                            }} onClick={(e) => { (nextStep(e)) }}>   {step === 1 ? <>Join For Free</> : <>Continue</>} &nbsp; <Box component="span" sx={{
                                                                fontSize: {
                                                                    xs: "0px", sm: "17px", mm: "20px", lm: "19px", md: "16px", lg: "26px", xl: "30px"
                                                                }, paddingBottom: {
                                                                    xs: "0px", sm: "3px", mm: "3px", lm: "3px", md: "3px", lg: "3px", xl: "3.5px"
                                                                }
                                                            }}>&rarr;</Box></Button>
                                                        </Box>
                                                        </>}
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Home2