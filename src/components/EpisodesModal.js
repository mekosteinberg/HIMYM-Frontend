import React from 'react';
import { Box, Modal, Typography, Rating, Card } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

const modalstyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};

export default function EpisodesModal({ open, onClose, episodeDetails }) {


    return (
        <>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalstyle}>
                    <Card>
                        <CardMedia component="img" height="100" image={episodeDetails.image} />
                        <Typography sx={{ mb: 2 }}>Season:{episodeDetails.season}</Typography>
                        <Typography sx={{ mt: 2 }}> Episode:{episodeDetails.number}</Typography>
                        <Typography sx={{ mt: 2 }}> Name:{episodeDetails.name}</Typography>
                        <Typography sx={{ mb: 2 }}>Air Date: {episodeDetails.airdate}</Typography>
                        <Typography sx={{ mb: 2 }}>Summary: {episodeDetails.summary}</Typography>

                        {/* <Rating value={episodeDetails.rating} readOnly max={10} precision={0.5} /> */}
                        {/* <Typography sx={{ mb: 2 }}>Rating: {episodeDetails.rating}</Typography> */}

                    </Card>
                </Box>
            </Modal>
        </>
    );
}

