import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

function About(){
    const navigate = useNavigate();
    return(
        <Container maxWidth="md" sx={{textAlign: "center", mt:5}}>
            {}
            <Typography variant="h2" gutterBotton>
                Información
            </Typography>
            <br/>
            {}
            <Typography variant="h5" gutterBotton>
                Katherine Galilea Guardado Garza
            </Typography>
            {}
            <Typography variant="h5" gutterBotton>
                Facultad de Informática Mazatlán
            </Typography>
            {}
            <Typography variant="h5" gutterBotton>
                c:
            </Typography>
            <br/>
            {}
            <Button variant="contained" color="primary" onClick={() => navigate("/contact")}>
                Contact
             </Button>
        </Container>
    );
}

export default About