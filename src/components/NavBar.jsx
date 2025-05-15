import React from "react";
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

function NavBar(){
    return (
        <AppBar>
            <Toolbar>
                <Typography>
                    KAT 🌸
                </Typography>
                <Button color="inherit" component={Link}to="/">
                    Inicio
                </Button>
                <Button color="inherit" component={Link}to="/about">
                    Info
                </Button>
                <Button color="inherit" component={Link}to="/contact">
                    Contacto
                </Button>
                <Button color="inherit" component={Link}to="/mapa">
                    Mapa
                </Button>
                <Button color="inherit" component={Link}to="/mapaRuta">
                    Mapa Ruta
                </Button>
                <Button color="inherit" component={Link}to="/mapaCluster">
                    Mapa Cluster
                </Button>
            </Toolbar>
        </AppBar>
    );
}
 export default NavBar;