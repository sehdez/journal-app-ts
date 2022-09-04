import { TurnedInNot } from "@mui/icons-material";
import { Box, Drawer, Grid, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";



interface Props {
    drawerWidth?: number;
}

export const SideBar = ({ drawerWidth = 240 }:Props ) => {
    return (
        <Box
            component = 'nav'
            sx = {{ width: { sm: drawerWidth }, flexShrink: { sm:0 }}}
        >
            <Drawer
                variant = 'permanent' // Puede ser temporary
                open
                sx = {{ 
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant = 'h6' noWrap component='div' >
                        Sergio Hernández
                    </Typography>
                </Toolbar>

                <List>
                    {
                        ['Enero', 'Febrero','Marzo', 'Abril', 'Mayo','Junio'].map(( text ) => (
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary = { text } />
                                    <ListItemText secondary = { 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquam, sit ' } />
                                </Grid>
                            </ListItemButton>
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}
