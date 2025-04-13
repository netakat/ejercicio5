import React, { useState } from 'react';
import { Container, Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'

function Mapa() {
    const estilo = {
        width:"50vw",
        height:"600px",
    }
    const lugar = {
        lat:41.8902102,
        lng:12.4922309,
    }
    const navigate = useNavigate();
    const [infoOpen, setInfoOpen] = useState(false);

    return(
        <Container maxWidth={false}>
            <Box sx={{
                width:"92%",
                p:6,
                boxShadow:3,
                borderRadius:4,
                backgroundColor:"white",
            }}>
                <Typography variant='h4' align='center' gutterBottom>
                    MAPA
                </Typography>
                <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                    <GoogleMap mapContainerStyle={estilo}
                    center={lugar} zoom={12}>
                        <Marker position={lugar} onClick={()=>setInfoOpen(true)}/>
                            {infoOpen && (
                                <InfoWindow position={lugar} onCloseClick={()=>setInfoOpen(false)}>
                                    <Box>
                                        <Typography variant='subtitle1' fontWeight="bold" color='black' gutterBottom>
                                            Coliseo Romano
                                        </Typography>
                                        <Typography variant='body2'color='black' gutterBottom>
                                            Maravilla del Mundo Moderno
                                        </Typography>
                                        <Button variant='contained' size='medium' onClick={()=>alert("Coliseo Romano")}>
                                            Ver más
                                        </Button>
                                    </Box>
                                </InfoWindow>
                            )}
                    </GoogleMap>
                </LoadScript>
            </Box>
            {}
            <br/>
            <Button variant="contained" color="primary" onClick={() => navigate("/")}>
                Inicio
            </Button>
        </Container>
    );
}

export default Mapa