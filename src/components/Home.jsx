import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    return (
        <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
            { }
            <Box sx={{
                mb: 2,
                width: "600px",
                p: 6,
                boxShadow: 3,
                borderRadius: 4,
                backgroundColor: "#f5f5f5"
            }}>
                <Typography variant="h4" gutterBottom>
                    Implementaciones con Google Maps en React c:
                </Typography>
                <br />
                { }
                <Typography variant="h6" gutterBottom>
                    Guardado Garza Katherine Galilea
                </Typography>
                { }
                <Typography variant="p" gutterBottom>
                    P.D. No tengo la facturación de la API activada, losiento profe :c
                </Typography>
                <br /><br />
                { }

                <Box sx={{
                    display: 'flex',
                    gap: 3,
                    justifyContent: 'center',
                }}>
                    <Box sx={{
                        mb: 2,
                        width: "200px",
                        p: 2,
                        boxShadow: 3,
                        borderRadius: 4,
                        backgroundColor: "white"
                    }}>
                        <Typography variant='p' gutterBottom>
                            Integrar Google Maps en React
                        </Typography>
                        <br /><br />
                        { }
                        < Button variant="contained" onClick={() => navigate("/mapa")} sx={{
                            backgroundColor: "#1e8d96",
                            color: "#fff",
                            '&:hover': {
                                backgroundColor: "#1b7b83"
                            }
                        }}>
                            Actividad 1
                        </Button >
                    </Box>

                    <Box sx={{
                        mb: 2,
                        width: "200px",
                        p: 2,
                        boxShadow: 3,
                        borderRadius: 4,
                        backgroundColor: "white"
                    }}>
                        <Typography variant='p' gutterBottom>
                            Generar direcciones en Google Maps
                        </Typography>
                        <br /><br />
                        { }
                        < Button variant="contained" onClick={() => navigate("/mapaRuta")} sx={{
                            backgroundColor: "#1e8d96",
                            color: "#fff",
                            '&:hover': {
                                backgroundColor: "#1b7b83"
                            }
                        }}>
                            Actividad 2
                        </Button >
                    </Box>

                    <Box sx={{
                        mb: 2,
                        width: "200px",
                        p: 2,
                        boxShadow: 3,
                        borderRadius: 4,
                        backgroundColor: "white"
                    }}>
                        <Typography variant='p' gutterBottom>
                            Implementación de Marker Clustering
                        </Typography>
                        <br /><br />
                        { }
                        < Button variant="contained" onClick={() => navigate("/mapaCluster")} sx={{
                            backgroundColor: "#1e8d96",
                            color: "#fff",
                            '&:hover': {
                                backgroundColor: "#1b7b83"
                            }
                        }}>
                            Actividad 3
                        </Button >
                    </Box>

                </Box>

                <Box sx={{
                    display: 'flex',
                    gap: 3,
                    justifyContent: 'center',
                }}>

                    <Box sx={{
                        mb: 2,
                        width: "200px",
                        p: 2,
                        boxShadow: 3,
                        borderRadius: 4,
                        backgroundColor: "white"
                    }}>
                        <Typography variant='p' gutterBottom>
                            Trazando sobre el mapa con Drawing Tools
                        </Typography>
                        <br /><br />
                        { }
                        < Button variant="contained" onClick={() => navigate("/mapaDrawing")} sx={{
                            backgroundColor: "#1e8d96",
                            color: "#fff",
                            '&:hover': {
                                backgroundColor: "#1b7b83"
                            }
                        }}>
                            Actividad 4
                        </Button >
                    </Box>

                    <Box sx={{
                        mb: 2,
                        width: "200px",
                        p: 2,
                        boxShadow: 3,
                        borderRadius: 4,
                        backgroundColor: "white"
                    }}>
                        <Typography variant='p' gutterBottom>
                            Implementación de Routes API Rendering
                        </Typography>
                        <br /><br />
                        { }
                        < Button variant="contained" onClick={() => navigate("/routesAPI")} sx={{
                            backgroundColor: "#1e8d96",
                            color: "#fff",
                            '&:hover': {
                                backgroundColor: "#1b7b83"
                            }
                        }}>
                            Actividad 5
                        </Button >
                    </Box>

                </Box>

            </Box>
        </Container>
    );
}

export default Home
