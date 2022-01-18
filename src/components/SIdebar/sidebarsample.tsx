import '../SIdebar/sidebar.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import StorageIcon from '@mui/icons-material/Storage';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import Navbar from '../Navbar/Navbar';
import { Button } from '@mui/material';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const ResponsiveDrawer = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  
  const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className = "container" >
            
        
            <Navbar />
            <Box className ="sidebar">
            <Toolbar />
          <Button className = 'flowius' >Flowius Manage</Button>
          <Divider/>
          <List className = 'content'>
                {['Manage User'].map((text,) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            <PersonOutlineIcon fontSize='small' color='primary' />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <List className = 'content'>
                {['Manage project'].map((text,) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            <AccountTreeIcon color='primary' fontSize='small' />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <List className = 'content'>
                {['Global Database Material'].map((text,) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            <StorageIcon color='primary' fontSize='small' />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <List className = 'content'>
                {['Global Maintenace'].map((text,) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            <PlumbingIcon color='primary' fontSize='small' />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        
            </Box> 
          
              
    </div>
  );
}
export default ResponsiveDrawer