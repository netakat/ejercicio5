import React, { useState, useRef } from 'react';
import { GoogleMap, LoadScript, DirectionsRenderer, Autocomplete } from '@react-google-maps/api';
import { Container, Box, Button, ButtonGroup, TextField, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const containerStyle = {
    width: "33vw",
    height: "600px",
};

const center = {
    lat: 23.1983537,
    lng: -106.4232091
};

const App = () => {
    const [directions, setDirections] = useState(null);
    const [travelMode, setTravelMode] = useState(null);
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [originAuto, setOriginAuto] = useState(null);
    const [destinationAuto, setDestinationAuto] = useState(null);
    const navigate = useNavigate();

    const handleTravelMode = (mode) => {
        if (window.google && window.google.maps) {
            setTravelMode(window.google.maps.TravelMode[mode]);
        }
    };

    const calculateRoute = () => {
        if (!origin || !destination || !travelMode) return;

        const directionsService = new window.google.maps.DirectionsService();

        directionsService.route(
            {
                origin,
                destination,
                travelMode
            },
            (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                    setDirections(result);
                } else {
                    console.error(`Error al calcular la ruta: ${status}`);
                }
            }
        );
    };

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
                        Routes API Rendering
                    </Typography>
                    { }

                    <LoadScript
                        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                        libraries={['places']}
                        onLoad={() => handleTravelMode('DRIVING')}
                    >
                        <h2>Ruta entre dos puntos</h2>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2 }}>
                            <Autocomplete
                                onLoad={(autocomplete) => setOriginAuto(autocomplete)}
                                onPlaceChanged={() => {
                                    const place = originAuto?.getPlace();
                                    setOrigin(place?.formatted_address || '');
                                }}
                            >
                                <TextField label="Origen" fullWidth variant="outlined" />
                            </Autocomplete>

                            <Autocomplete
                                onLoad={(autocomplete) => setDestinationAuto(autocomplete)}
                                onPlaceChanged={() => {
                                    const place = destinationAuto?.getPlace();
                                    setDestination(place?.formatted_address || '');
                                }}
                            >
                                <TextField label="Destino" fullWidth variant="outlined" />
                            </Autocomplete>
                        </Box>

                        <ButtonGroup variant="contained" sx={{ mb: 2 }}>
                            <Button onClick={() => handleTravelMode('DRIVING')}>Coche</Button>
                            <Button onClick={() => handleTravelMode('WALKING')}>Caminando</Button>
                            <Button onClick={() => handleTravelMode('BICYCLING')}>Bicicleta</Button>
                        </ButtonGroup>

                        <br />
                        <Button variant="outlined" onClick={calculateRoute}>Calcular Ruta</Button>

                        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
                            {directions && <DirectionsRenderer directions={directions} />}
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
                        Se agregó una API de google maps a un proyecto con Vite y React, que mostrará en el mapa una ruta trazada entre dos ubicaciones,
                        y permita recalcularla.
                    </Typography>
                    <br /><br />
                    { }
                    <Typography variant="p" gutterBottom>
                        Utilicé la librería de mui/material, para poder importar las herramientas Container, Box, Button, ButtonGroup, TextField y
                        Typography, para poder mostrar la actividad ordenadamente. De las cuales, ButtonGroup y TextField fueron usadas para la
                        funcionalidad de la actividad, siendo aplicadas para agrupar los botones en las que el usuario puede elegir la forma en la
                        que viajará entre los puntos seleccionados, y para que el usuario pueda elegir libremente el punto de origen y el punto de
                        destino que deseé para su ruta, respectivamente.
                        También usé la librería de react-google-maps/api, para importar las herramientas de GoogleMap, LoadScript,
                        DirectionsRenderer y Autocomplete, todas éstas necesarias para poder mostrar el mapa de google maps, dónde el componente 
                        de AutoComplete se emplea al momento que el usuario escribe los puntos de origen y destino que eligió, y la herramienta 
                        DirectionsRenderer es la encargada de trazar o crear la ruta de acuerdo a lo seleccionado por el usuario.
                    </Typography>
                    <br /><br />
                    { }
                    <Typography variant="p" gutterBottom>
                        En esta actividad, aprendí a recalcular una ruta al cambiar los parámetros de entrada, siendo ésta una aplicación dinámica 
                        y amigable para el usuario, al poderle brindar la funcionalidad de poder elegir su origen, destino y transporte.
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
};

export default App;


