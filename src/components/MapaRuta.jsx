// MapaConRuta.jsx
import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, DirectionsRenderer, useJsApiLoader } from "@react-google-maps/api";
import { Container, Box, Typography, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

// Estilos del contenedor del mapa
const containerStyle = {
  width: "33vw",
  height: "600px",
};

// Coordenadas de origen y destino
const origen = { lat: 23.2314459, lng: -106.4265313 }; // Ciudad de México
const destino = { lat: 23.1983537, lng: -106.4232091 }; // Ecatepec
const libraries = ["places"];

const MapaConRuta = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const navigate = useNavigate();
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    if (!isLoaded) return;

    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: origen,
        destination: destino,
        travelMode: google.maps.TravelMode.WALKING,
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
        } else {
          console.error("Error al obtener direcciones:", status);
        }
      }
    );
  }, [isLoaded]);

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
            Generar direcciones en Google Maps
          </Typography>
          <br />
          { }
          <Typography variant="h6" gutterBottom>
            Ruta desde Fimaz a la PLazuela Machado
          </Typography>
          <br />
          { }

          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={origen}
              zoom={13}
            >
              {directions && (
                <DirectionsRenderer
                  options={{
                    directions: directions,
                  }}
                />
              )}

              <Marker position={origen} label="A" />
              <Marker position={destino} label="B" />
            </GoogleMap>
          ) : (
            <Typography>Cargando mapa ...</Typography>
          )}

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
            Se agregó una API de google maps a un proyecto con Vite y React, que mostrará una ruta entre dos puntos, en este caso,
            el punto de origen es la Facultad de Informática Mazatlán y el punto de destino es la Plazuela Machado.
          </Typography>
          <br /><br />
          { }
          <Typography variant="p" gutterBottom>
            Utilicé la librería de mui/material, para poder importar las herramientas Container, Box, Typography y Button,
            para poder mostrar la actividad ordenadamente.
            También usé la librería de react-google-maps/api, para importar las herramientas de Google Map, Marker, DirectionsRenderer y
            useJsApiLoader, las cuales fueron necesarias para poder mostrar el mapa de google maps, con ambos destinos visualmente llamativos
            con las letras A y B, gracias a la herramienta Marker, así como la herramienta DirectionsRenderer para poder marcar la ruta entre los
            puntos mencionados, por último la herramienta useJsApiLoader para poder validar si la API ya fue cargada, de no ser así, que cargue la
            API.
          </Typography>
          <br /><br />
          { }
          <Typography variant="p" gutterBottom>
            En esta actividad, reforcé mis conocimientos en el uso de componentes para organizar y dar estilo a la interfaz de manera clara.
            También, aprendí a trazar una ruta entre distintos puntos dentro del mapa, usando integraciones externas de servicios en el proyecto 
            con React.
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

    </Container >
  );
};

export default MapaConRuta;
