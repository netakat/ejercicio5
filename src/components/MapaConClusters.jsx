import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF, MarkerClustererF } from "@react-google-maps/api";
import { Container, Box, Typography, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const containerStyle = {
    width: "33vw",
    height: "600px",
};

const center = {
    lat: 23.2494, //Mazatlán
    lng: -106.4111
};

//Simulación  de puntos aleatorios
const generateMarkers = () => {
    const markers = [];
    for (let i = 0; i < 100; i++) {
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
    const navigate = useNavigate();
    const markers = generateMarkers();

    return isLoaded ? (
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
                        Implementación de Marker Clustering con Google Maps en React
                    </Typography>
                    <br />

                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={12}
                    >
                        <MarkerClustererF>
                            {(clusterer) =>
                                markers.map((pos, index) => (
                                    <MarkerF key={index} position={pos} clusterer={clusterer} />
                                ))
                            }
                        </MarkerClustererF>
                    </GoogleMap>
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
                        Se agregó una API de google maps a un proyecto con Vite y React, que mostrará múltiples ubicaciones y agrupará marcadores, en este caso,
                        se usan ubicaciones aleatorias.
                    </Typography>
                    <br /><br />
                    { }
                    <Typography variant="p" gutterBottom>
                        Utilicé la librería de mui/material, para poder importar las herramientas Container, Box, Typography y Button,
                        para poder mostrar la actividad ordenadamente.
                        También usé la librería de react-google-maps/api, para importar las herramientas de Google Map, useJsApiLoader, MarkerF y 
                        MarkerClustererF, las cuales fueron necesarias para mostrar el mapa de google maps, junto con la herramienta MarkerF que 
                        ayuda al usuario a distinguir fácilmente la ubicación a mostrar, y la herramienta MarkerClustererF es la responsable de 
                        agrupar las ubicaciones cercanas, que fueron generadas de forma aleatoria para la funcionalidad de este proyecto, 
                        por último la herramienta useJsApiLoader para poder validar si la API ya fue cargada, de no ser así, que cargue la API.
                    </Typography>
                    <br /><br />
                    { }
                    <Typography variant="p" gutterBottom>
                        En esta actividad, aprendí a trabajar con una alta cantidad de ubicaciones en un mapa interactivo, y a su vez a mejorar 
                        la usabilidad del mismo, mediante la agrupación de los marcadores. Al igual que en las actividades anteriores, seguí 
                        reforzando mis conocimientos para el aspecto visual de la interfaz, siendo en este punto más fácil su uso.
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
    ) : (
        <p>Cargando mapa ...</p>
    );
};

export default MapaConClusters;