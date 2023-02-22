import * as React from 'react';
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';


export default function UploadButton() {
    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <Button variant="contained" component="label" sx={{ margin: 4 }}>

                +
                <input hidden accept="*" multiple type="file" />
            </Button>
            <Button variant="solid" component="label" sx={{ bgcolor: '#2196f3', ':hover': { bgcolor: '#2196f3', color: 'white' }, margin: 4, color: 'white' }}>

                upload

            </Button>



        </Stack>
    );
}