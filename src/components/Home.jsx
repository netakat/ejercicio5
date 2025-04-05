import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

function Home(){

    const navigate = useNavigate();

    return (
        <Container maxWidth="md" sx={{textAlign: "center", mt:5}}>
            {}
            <Typography variant="h2" gutterBotton>
                Guten Morgen c:
            </Typography>
            <br/>
            {}
            <Button variant="contained" color="primary" onClick={() => navigate("/about")}>
                About
            </Button>
        </Container>
    );
}

export default Home