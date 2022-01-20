import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Navbar from '../Navbar/Navbar';
import {Tab, Tabs } from '@mui/material';
import routes from '../../routes'
import { Route, Routes, useNavigate, } from "react-router-dom";
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
  const navigate = useNavigate();
  





  const container = window !== undefined ? () => window().document.body : undefined;
console.log(container);

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
                    
                    <Toolbar style={{ backgroundColor: "#1e1e2f" }}>
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
            '& .MuiDrawer-paper': { width: drawerWidth, backgroundColor: "#1e1e2f" },
            
          }}
          open
                    >
                        <Toolbar style={{ backgroundColor: "#1e1e2f" }}>
                        
                     <Typography variant='h6' style={{ color: '#1976d2' }}> Flowius Manage</Typography> 
                        </Toolbar>
              <Divider />
              <List className='content'>
                {routes.map(item => (
                  <ListItem
                    button
                    key={item.text}
                    onClick={() => navigate(item.path)}
                  >
                    <ListItemText primary={item.text} />
                    <ListItemIcon>{  }</ListItemIcon>

                  </ListItem>
                ))}
              </List>
      
        </Drawer>
      </Box>
      <Box
        
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, backgroundColor: '#1e1e2e' }}
          >
        <>
        <Routes>
          <Route path="/debe" element={<Debebe />} />
        </Routes>
    </>
      </Box>
    </Box>
            
      </div>
    
  );
}
export default Sidebar; 