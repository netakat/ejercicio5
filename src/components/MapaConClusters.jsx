import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF,MarkerClustererF } from "@react-google-maps/api";
import { Container, Box } from "@mui/material";

const containerStyle = {
    width: '100%',
    height: '500px'
};

const center = {
    lat: 23.2494, //Mazatlán
    lng: -106.4111
};

//Simulación  de puntos aleatorios
const generateMarkers = () => {
    const markers = [];
    for (let i = 0; i < 100; i++){
        markers.push({
            lat: center.lat + Math.random() * 0.1 - 0.05,
            lng: center.lng + Math.random() * 0.1 - 0.05
        });
    }
    return markers;
}

const MapaConClusters = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    });
    const markers = generateMarkers();

    return isLoaded ? (
        <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
            <Box sx={{
                mb: 2,
                width: "500%",
                p: 6, 
                boxShadow: 3,
                borderRadius: 4,
                backgroundColor: "white"
            }}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={12}
                >
                    <MarkerClustererF>
                        {(clusterer) => 
                            markers.map ((pos, index) => (
                                <MarkerF key={index} position={pos} clusterer={clusterer} />
                            ))
                        }
                    </MarkerClustererF>
                </GoogleMap>
            </Box>
        </Container>
    ) : (
        <p>Cargando mapa ...</p>
    );
};

export default MapaConClusters;