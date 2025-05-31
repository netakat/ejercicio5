import { GoogleMap, LoadScript, DrawingManager } from "@react-google-maps/api";
import { Container, Box, Button, Typography, List, ListItem, Divider } from '@mui/material';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const containerStyle = {
    width: "100%",
    height: "100%",
};

const center = {
    lat: 20.6736,
    lng: -103.344
};

const MapContainer = () => {
    const [controlPosition, setControlPosition] = useState(null);
    const [shapes, setShapes] = useState([]);
    const drawnShapesRef = useRef([]);
    const navigate = useNavigate();

    const handleMapLoad = () => {
        if (window.google) {
            setControlPosition(window.google.maps.ControlPosition.TOP_CENTER);
        }
    };

    const handlePolygonComplete = (polygon) => {
        const pathArray = polygon?.getPath?.()?.getArray?.();
        if (Array.isArray(pathArray)) {
            const path = pathArray.map(coord => ({
                lat: coord.lat(),
                lng: coord.lng()
            }));

            setShapes(prev => [...prev, path]);

            drawnShapesRef.current.push(polygon);
        } else {
            console.warn("No se pudo obtener el path del polígono.");
        }
    };

    const handleClearShapes = () => {
        drawnShapesRef.current.forEach(shape => shape.setMap(null));
        drawnShapesRef.current = [];
        setShapes([]);
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
                    width: "600px",
                    p: 4,
                    boxShadow: 3,
                    borderRadius: 4,
                    backgroundColor: "#f5f5f5"
                }}>
                    
                    <br />
                    <Typography variant="h5" gutterBottom>
                        Trazando sobre el mapa con Drawling Tools
                    </Typography>
                    <br />
                    { }

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 2,
                        width: '100%'
                    }}>

                        <Box sx={{
                            flex: 2,
                            height: "400px",
                            boxShadow: 3,
                            borderRadius: 2,
                            backgroundColor: "white"
                        }}>
                            <LoadScript
                                googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                                libraries={['drawing']}
                            >
                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={center}
                                    zoom={13}
                                    onLoad={handleMapLoad}
                                >
                                    {controlPosition !== null && (
                                        <DrawingManager
                                            onPolygonComplete={handlePolygonComplete}
                                            options={{
                                                drawingControl: true,
                                                drawingControlOptions: {
                                                    position: controlPosition,
                                                    drawingModes: ['polygon']
                                                }
                                            }}
                                        />
                                    )}
                                </GoogleMap>
                            </LoadScript>
                        </Box>


                        <Box sx={{
                            flex: 1,
                            maxHeight: "400px",
                            overflowY: 'auto',
                            p: 2,
                            boxShadow: 3,
                            borderRadius: 2,
                            backgroundColor: "#f9f9f9"
                        }}>
                            <Typography variant="h6" gutterBottom>Coordenadas Dibujadas</Typography>
                            {shapes.length === 0 ? (
                                <Typography variant="body2">No hay formas dibujadas.</Typography>
                            ) : (
                                <List dense>
                                    {shapes.map((shape, index) => (
                                        <ListItem key={index} disablePadding>
                                            <Box>
                                                <Typography variant="subtitle2">Forma {index + 1}:</Typography>
                                                {shape.map((coord, i) => (
                                                    <Typography key={i} variant="caption">
                                                        ({coord.lat.toFixed(4)}, {coord.lng.toFixed(4)})
                                                    </Typography>
                                                ))}
                                                <Divider sx={{ my: 1 }} />
                                            </Box>
                                        </ListItem>
                                    ))}
                                </List>
                            )}
                            <Button
                                variant="contained"
                                color="error"
                                fullWidth
                                sx={{ mt: 2 }}
                                onClick={handleClearShapes}
                                disabled={shapes.length === 0}
                            >
                                Eliminar formas
                            </Button>
                        </Box>
                    </Box>

                </Box>

                <Box sx={{
                    mb: 2,
                    width: "400px",
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
                        Se agregó una API de google maps a un proyecto con Vite y React, el cuál permitirá a los usuarios dibujar polígonos, 
                        rectángulos o líneas sobre un mapa de Google.
                    </Typography>
                    <br /><br />
                    { }
                    <Typography variant="p" gutterBottom>
                        Utilicé la librería de mui/material, para poder importar las herramientas Container, Box, Button, Typography, List, 
                        ListItem y Divider, para poder mostrar la actividad ordenadamente. En dónde los componentes List, ListItem y Divider, 
                        fueron de uso exclusivo para poder darle vista a la parte de la interfaz donde se muestran las formas o polígonos 
                        dibujados.
                        También usé la librería de react-google-maps/api, para importar las herramientas de GoogleMap, LoadScript y DrawingManager, 
                        todas éstas necesarias para poder mostrar el mapa de google maps, en el cuál, la herramienta DrawingManager fue la que 
                        permitió que el usuario pueda crear dichas figuras dentro del mapa.
                    </Typography>
                    <br /><br />
                    { }
                    <Typography variant="p" gutterBottom>
                        En esta actividad, aprendí nuevas herramientas para poder contribuir al aspecto visual de la interfaz, haciéndola más 
                        ordenada y clara para los usuarios.
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

export default MapContainer;
