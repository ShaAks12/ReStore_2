// import { useEffect, useState } from "react"
// import { Product } from "../models/product";
import { useState } from "react";
import Header from './Header';
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {
  const[darkMode,setDarkMode] = useState(false);
  const paletteType = darkMode?'dark':'light'

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background:{
        default : paletteType === 'light' ? '#eaeaea':'#121212'
      }
    }
  })

  const handletogglerButton = () => {
    setDarkMode(prevMode => !prevMode);
  }

  return (
  
    <>
    <ThemeProvider theme={theme}>

    <CssBaseline />
      <Header darkMode={darkMode} handleToggle={handletogglerButton} />
      <Container>
        <Outlet />
      </Container>

    </ThemeProvider>
      
          
      

      {/* <button onClick={handleSubmit}>Submit</button> */}
      
      
    
      
       
    </>
  )
}

export default App
