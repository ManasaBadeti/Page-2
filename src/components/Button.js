import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';


export default function SubButton() {
    return (
        <Box

            display="flex"
            justifyContent="center"
            alignItems="center"

        >
            <Button variant="solid" component="label" sx={{ bgcolor: '#2196f3', ':hover': { bgcolor: '#2196f3', color: 'white' }, margin: 1, color: 'white', fontWeight: 'bold' }}>

                Remove Attachments

            </Button>
            <Button variant="solid" component="label" sx={{ bgcolor: '#2196f3', ':hover': { bgcolor: '#2196f3', color: 'white' }, margin: 1, width: 50, color: 'white', fontWeight: 'bold' }}>

                close

            </Button>



        </Box>
    );
}