import React, { useState } from 'react';
import { Container, Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'

function Mapa() {
    const estilo = {
        width: "33vw",
        height: "600px",
    }
    const lugar = {
        lat: 41.8902102,
        lng: 12.4922309,
    }
    const navigate = useNavigate();
    const [infoOpen, setInfoOpen] = useState(false);

    return (

        <Container maxWidth={false}>

            <Box sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
            }}>

                <Box sx={{
                    mb: 2,
                    width: "500px",
                    p: 6,
                    boxShadow: 3,
                    borderRadius: 4,
                    backgroundColor: "#f5f5f5"
                }}>
                    <Typography variant="h5" gutterBottom>
                        Implementaciones con Google Maps
                    </Typography>
                    <br />
                    { }
                    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                        <GoogleMap mapContainerStyle={estilo}
                            center={lugar} zoom={10}>
                            <Marker position={lugar} onClick={() => setInfoOpen(true)} />
                            {infoOpen && (
                                <InfoWindow position={lugar} onCloseClick={() => setInfoOpen(false)}>
                                    <Box>
                                        <Typography variant='subtitle1' fontWeight="bold" color='black' gutterBottom>
                                            Coliseo Romano
                                        </Typography>
                                        <Typography variant='body2' color='black' gutterBottom>
                                            Maravilla del Mundo Moderno
                                        </Typography>
                                        <Button variant='contained' size='medium' onClick={() => alert("Coliseo Romano")}>
                                            Ver más
                                        </Button>
                                    </Box>
                                </InfoWindow>
                            )}
                        </GoogleMap>
                    </LoadScript>
                </Box>

                <Box sx={{
                    mb: 2,
                    width: "500px",
                    p: 6,
                    boxShadow: 3,
                    borderRadius: 4,
                    backgroundColor: "#f5f5f5"
                }}>
                    <Typography variant="h5" gutterBottom>
                        Explicación
                    </Typography>
                    <br />
                    { }
                    <Typography variant="p" gutterBottom>
                        Se agregó una API de google maps a un proyecto con Vite y React, que mostrará una ubicación en específico, en este caso,
                        el coliseo romano.
                    </Typography>
                    <br /><br />
                    { }
                    <Typography variant="p" gutterBottom>
                        Utilicé la librería de mui/material, para poder importar las herramientas Container, Box, Typography y Button,
                        para poder mostrar la actividad ordenadamente.
                        También usé la librería de react-google-maps/api, para importar las herramientas de Google Map, LoadScript, Marker e
                        InfoWindow, todas éstas necesarias para poder mostrar el mapa de google maps, en el cuál se muestra una ubicación exacta y
                        es visible al usuario gracias a la herramienta Marker. Con la herramienta InfoWindow, al hacerle click sobre el marcador,
                        muestra la información de la ubicación en la que está, así como un botón con la herramienta Button,
                        el cuál muestra más información de la misma ubicación.
                    </Typography>
                    <br /><br />
                    { }
                    <Typography variant="p" gutterBottom>
                        En esta actividad, aprendí a integrar una API en un proyecto con Vite y React, también al uso de librerías
                        especializadas en React y saber estructurar componentes visuales.
                    </Typography>
                    <br /><br />
                    { }

                    <Button variant="contained" onClick={() => navigate("/")} sx={{
                        backgroundColor: "#1e8d96",
                        color: "#fff",
                        '&:hover': {
                            backgroundColor: "#1b7b83"
                        }
                    }}>
                        Inicio
                    </Button>

                </Box>

            </Box>

        </Container>
    );
}

export default Mapa