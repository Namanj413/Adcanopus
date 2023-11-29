import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Home from './Home'
import Home2 from './Home2'

function App() {

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 320,
        mm:375,        
        lm: 425,
        md: 768,
        lg: 1024,
        xl: 1440,
      },
    },
});

  return (
    <>
    <ThemeProvider theme={theme}>
    <Home2/>

    </ThemeProvider>
   
    </>
  )
}

export default App
