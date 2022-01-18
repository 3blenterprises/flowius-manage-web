import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Navbar from '../Navbar/Navbar';
import { Button, Tab, Tabs } from '@mui/material';
import { Menu } from '@material-ui/icons';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import StorageIcon from '@mui/icons-material/Storage';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import routes from '../../routes'
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate, } from "react-router-dom";

import Debebe from '../Navbar/JustHey';

const drawerWidth = 240;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
  }

const Sidebar = (props: Props) => {


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            
      <Box component="main" sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
                >
                    
                    <Toolbar>
                    <Tabs
      >
        <Tab
          value="one"
          label="Put something here" />
        <Tab
          value="two"
          label="Put something here"/>
      </Tabs>

                        <Navbar/>
                    </Toolbar>
                    
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#1352a0" },
            
          }}
          open
                    >
                        <Toolbar>
                        <Typography variant = 'h5'> Flowius Manage </Typography>
                        </Toolbar>
              <Divider />
              <List>
                {routes.map(item => (
                  <ListItem
                    button
                    key={item.text}
                    onClick={() => navigate(item.path)}
                  >
                    <ListItemText primary = {item.text} />

                  </ListItem>
                ))}
              </List>
      
        </Drawer>
      </Box>
      <Box
        
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, backgroundColor: '#1e1e2e' }}
      >
        <>
      <Router>
        <Routes>
          <Route path="/debe" element={<Debebe />} />
        </Routes>
      </Router>
    </>
      </Box>
    </Box>
            
      </div>
    
  );
}
export default Sidebar; 