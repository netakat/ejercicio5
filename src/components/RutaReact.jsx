import React, { useState, useRef } from 'react';
import {
    GoogleMap,
    LoadScript,
    DirectionsRenderer,
    Autocomplete
} from '@react-google-maps/api';
import { Container, Box, Button, ButtonGroup, TextField } from "@mui/material";

const containerStyle = {
    width: '100%',
    height: '500px'
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
    const originRef = useRef(null);
    const destinationRef = useRef(null);

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
        <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
            <Box sx={{
                mb: 2,
                width: "500px",
                maxWidth: "600px",
                p: 6,
                boxShadow: 3,
                borderRadius: 4,
                backgroundColor: "white"
            }}>
                <LoadScript
                    googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                    libraries={['places']}
                    onLoad={() => handleTravelMode('DRIVING')} 
                >
                    <h2>Ruta entre dos puntos</h2>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2 }}>
                        <Autocomplete
                            onPlaceChanged={() => {
                                const place = originRef.current.getPlace();
                                setOrigin(place?.formatted_address || '');
                            }}
                        >
                            <TextField label="Origen" inputRef={originRef} fullWidth variant="outlined" />
                        </Autocomplete>

                        <Autocomplete
                            onPlaceChanged={() => {
                                const place = destinationRef.current.getPlace();
                                setDestination(place?.formatted_address || '');
                            }}
                        >
                            <TextField label="Destino" inputRef={destinationRef} fullWidth variant="outlined" />
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
        </Container>
    );
};

export default App;


