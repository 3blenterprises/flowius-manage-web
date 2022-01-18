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
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import StorageIcon from '@mui/icons-material/Storage';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

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

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };



    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: ` calc(100% - ${drawerWidth}px) ` },
                        ml: { sm: ` ${drawerWidth}px ` },
                    }}
                >

                    <Toolbar style={{ backgroundColor: "#1e1e2f" }}>
                        <Navbar />
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
                            <Typography variant='h6' style={{ color: '#1976d2' }}> Flowius Manage </Typography>
                        </Toolbar>
                        <Divider />
                        <List className='content' style={{ backgroundColor: "#1e1e2f" }}>
                            {['Manage User'].map((text,) => (
                                <ListItem button key={text}>
                                    <ListItemIcon >
                                        <PersonOutlineIcon color='primary' />
                                    </ListItemIcon>
                                    <ListItemText style={{ color: "white", fontFamily: "system-ui" }} primary={text} />
                                </ListItem>
                            ))}
                        </List>
                        <List >
                            {['Manage project'].map((text,) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        <AccountTreeIcon color='primary' />
                                    </ListItemIcon>
                                    <ListItemText style={{ color: "white", fontFamily: "system-ui" }} primary={text} />
                                </ListItem>
                            ))}
                        </List>
                        <List className='content'>
                            {['Global Database Material'].map((text,) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        <StorageIcon color='primary' />
                                    </ListItemIcon>
                                    <ListItemText style={{ color: "white", fontFamily: "system-ui" }} primary={text} />
                                </ListItem>
                            ))}
                        </List>
                        <List className='content'>
                            {['Global Maintenace'].map((text,) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        <PlumbingIcon color='primary' />
                                    </ListItemIcon>
                                    <ListItemText style={{ color: "white", fontFamily: "system-ui" }} primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: ` calc(100% - ${drawerWidth}px)` }, backgroundColor: '#f1f7fc' }}
                >
                    <Toolbar />
                </Box>
            </Box>

        </div>

    );
}
export default Sidebar;