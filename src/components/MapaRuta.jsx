// MapaConRuta.jsx
import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Container, Box, Typography } from "@mui/material";

// Estilos del contenedor del mapa
const containerStyle = {
  width: "100%",
  height: "500px",
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
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Ruta desde FIMAZ a Plazuela Machado
        </Typography>
      </Box>

      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={origen}
          zoom={10}
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
    </Container>
  );
};

export default MapaConRuta;
