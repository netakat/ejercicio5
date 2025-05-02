import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

function Contact(){
    const navigate = useNavigate();
    return(
        <Container>
            {}
            <Typography variant="h2" gutterBottom>
                Contacto
            </Typography>
            <br/>
            {}
            <Typography variant="h5" gutterBottom>
                6691234567
            </Typography>
            {}
            <Typography variant="h5" gutterBottom>
                kat@gmail.com
            </Typography>
            {}
            <Typography variant="h5" gutterBottom>
                c:
            </Typography>
            <br/>
            {}
            <Button variant="contained" color="primary" onClick={() => navigate("/")}>
                Home
            </Button>
        </Container>
    );
}

export default Contact