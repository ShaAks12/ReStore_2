import { AppBar, Switch, Toolbar, Typography } from '@mui/material'

interface Props{
    darkMode:boolean;
    handleToggle: () => void;
}

const Header = ({darkMode,handleToggle}:Props) => {
         
    // const handleToggle = () => {
    //     toggleButton()
    // }
  return (
    <AppBar position='static' sx={{mb: 4}}>
        <Toolbar>
            <Typography variant='h6'>Re-Store</Typography>
            <Switch checked={darkMode} onChange={handleToggle} />
                
               
   
            {/* <Button color='inherit' onClick={handleToggle}>Toggle</Button> */}
        </Toolbar>
    </AppBar>
  )
}

export default Header