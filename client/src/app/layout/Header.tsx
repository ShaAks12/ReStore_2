import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
  Badge,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
  darkMode: boolean;
  handleToggle: () => void;
}

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "contact", path: "/contact" },
  { title: "about", path: "/about" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const Header = ({ darkMode, handleToggle }: Props) => {
  // const handleToggle = () => {
  //     toggleButton()
  // }
  const navStyles = {
    color: "inherit",
    textDecoration: "None",
    typography: "h6",
    "&:hover": {
      color: "grey.500",
    },
    "&.active": {
      color: "text.secondary",
    },
  };
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <Box display="flex" alignItems='center'>
          <Typography variant="h6" component={NavLink} to="/" sx={navStyles}>
            Re-Store
          </Typography>
          <Switch checked={darkMode} onChange={handleToggle} />
        </Box>

        <Box display="flex" alignItems='center'>

        <List sx={{ display: "flex" }}>
          {midLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        </Box>

        <Box display="flex" alignItems='center'>
        <IconButton size="large" edge="start" sx={{ mr: 2 }} color='inherit'>
          <Badge badgeContent="4" color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <List sx={{ display: "flex" }}>
          {rightLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        </Box>
        

        {/* <Button color='inherit' onClick={handleToggle}>Toggle</Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
