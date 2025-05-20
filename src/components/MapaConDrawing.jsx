import { GoogleMap, LoadScript, DrawingManager } from "@react-google-maps/api";
import { Container, Box, Button, Typography, List, ListItem, Divider } from '@mui/material';
import { useState, useRef } from 'react';

const containerStyle = {
    width: "100%",
    height: "500px",
};

const center = {
    lat: 20.6736,
    lng: -103.344
};

const MapContainer = () => {
    const [controlPosition, setControlPosition] = useState(null);
    const [shapes, setShapes] = useState([]); 
    const drawnShapesRef = useRef([]); 

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
        <Container maxWidth={false} sx={{ px:0, mt: 5}}>
            <Box sx={{ display: 'flex',justifyContent:"flex-start", width: "800px", gap: 2 }}>
                
                <Box sx={{
                    flex: 50,
                    p: 2,
                    boxShadow: 3,
                    borderRadius: 4,
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
                    flex: 30,
                    p: 2,
                    boxShadow: 3,
                    borderRadius: 4,
                    backgroundColor: "#f9f9f9",
                    maxHeight: '600px',
                    overflowY: 'auto'
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
        </Container>
    );
};

export default MapContainer;

