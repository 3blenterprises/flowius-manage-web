import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MaterialIcon from '@material/react-material-icon';
import routes from '../../routes' 
import { Route, Routes, useNavigate, } from "react-router-dom";
import Debebe from "../Navbar/JustHey";
import Navbar from '../Navbar/Navbar';
import flowiusManage from './flowiusManage.png';
import flowiusManageW from './flowiusManageW.png'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
    overflowX: "hidden"
  
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`
  }
});


interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,

    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));



const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
    "& .MuiDrawer-paper": {backgroundColor: 'red'},
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));
const MiniDrawer = () => {

    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    };
    

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} >
        <Toolbar
          sx= {{backgroundColor: 'white'}}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
              color: 'black', 
            }}
          >
                      <MenuIcon  />
          </IconButton>
          {open !== true?(<img src={flowiusManage} alt= '' style={{ width: '6em', marginLeft: '20px' }} />): null  }
            
                  <Navbar/>
        </Toolbar>
      </AppBar>
      <ClickAwayListener
         mouseEvent="onMouseDown"
         touchEvent="onTouchStart"
         onClickAway={handleDrawerClose}
      >
        <Drawer className="drawer"
              variant="permanent"
        open={open}
        sx={{
          '& .MuiDrawer-paper': {  backgroundColor: "#2579f7", boxShadow: '1.25px 2.5px 3.25px gray'  },
          
        }}
          >
           <Toolbar style={{ backgroundColor: "#2579f7" }}>
                        
           <img src={flowiusManageW} alt ="" style={{ width: '6em', marginLeft: '35px' }} /> 
          <IconButton
            onClick={handleDrawerClose}
            style = {{marginLeft: '52px', color: 'whitesmoke'}}
          >
            <ChevronLeftIcon/> 
          </IconButton>
                            </Toolbar>   
      
                      <Divider style = {{background: 'white'}} />
                       <List className='content'>
                        {routes.map((item, index) => (
                          <ListItem
                            button
                            key={item.text}
                            onClick={() => navigate(item.path)}
                          >
                              
                            <MaterialIcon icon={item.icon} style = {{marginRight: '23.15px', color: 'white', fontSize: '2em'}} />
                            
                            <ListItemText primary={item.text} style = {{color: 'white', fontSize: '0.75em',fontFamily: "Poppins,sans-serif"}} />
                            
        
                          </ListItem>
                        ))}
              </List>
              
              
      </Drawer>
        
</ClickAwayListener>
          
      <Box component="main" sx={{ flexGrow: 1, p: 3,  width: { sm: `calc(100% - 0px)` }, backgroundColor: '#fff' }}
          >
        <>
        <Routes>
          <Route path="/debe" element={<Debebe />} />
        </Routes>
    </>
      </Box>
    </Box>
  );
}
export default MiniDrawer