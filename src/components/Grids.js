import * as React from 'react';

import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import UploadButton from './upload';
import { TextField } from '@mui/material';
import { Stack } from '@mui/system';
import SubButton from './Button';

const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.vars.palette.text.tertiary,
}));

export default function Grids() {
    return (
        <Stack>
            <Grid xs={12} sx={{ bgcolor: '#2196f3', color: 'white', fontWeight: 'bold' }}>
                <Item >MANDATORY ATTACHMENTS</Item>
            </Grid>
            <Stack direction="row" >
                <Grid
                    container

                    xs={6}
                    sx={{ flexGrow: 1, bgcolor: "#F5F5F5", border: '2px solid black', margin: 0.5 }}

                >

                    <Grid xs={12} sx={{ bgcolor: '#2196f3', color: 'white', fontWeight: 'bold' }}>
                        <Item >Service Register/Pension Payment Order</Item>
                    </Grid>

                    <Grid xs={6}  >
                        <TextField sx={{ marginTop: 2 }}
                            name="upload-photo"
                            type="file"
                        />
                    </Grid>

                    <Grid xs={6}>
                        <UploadButton />
                    </Grid>



                </Grid>
                <Grid
                    container

                    xs={6}
                    sx={{ flexGrow: 1, bgcolor: "#F5F5F5", border: '2px solid black', margin: 0.5 }}

                >

                    <Grid xs={12} sx={{ bgcolor: '#2196f3', color: 'white', fontWeight: 'bold' }}>
                        <Item >Declaration from Officer</Item>
                    </Grid>

                    <Grid xs={6}  >
                        <TextField sx={{ marginTop: 2 }}
                            name="upload-photo"
                            type="file"
                        />
                    </Grid>

                    <Grid xs={6}>
                        <UploadButton />
                    </Grid>
                </Grid>

            </Stack>

            <Stack direction="row" >
                <Grid
                    container

                    xs={6}
                    sx={{ flexGrow: 1, bgcolor: "#F5F5F5", border: '2px solid black', margin: 0.5 }}

                >

                    <Grid xs={12} sx={{ bgcolor: '#2196f3', color: 'white', fontWeight: 'bold' }}>
                        <Item >Photo</Item>
                    </Grid>

                    <Grid xs={6}  >
                        <TextField sx={{ marginTop: 2 }}
                            name="upload-photo"
                            type="file"
                        />
                    </Grid>

                    <Grid xs={6}>
                        <UploadButton />
                    </Grid>



                </Grid>
                <Grid
                    container

                    xs={6}
                    sx={{ flexGrow: 1, bgcolor: "#F5F5F5", border: '2px solid black', margin: 0.5 }}

                >

                    <Grid xs={12} sx={{ bgcolor: '#2196f3', color: 'white', fontWeight: 'bold' }}>
                        <Item >Aadhar Card</Item>
                    </Grid>

                    <Grid xs={6}>
                        <TextField sx={{ marginTop: 2 }}
                            name="upload-photo"
                            type="file"
                        />
                    </Grid>

                    <Grid xs={6}>
                        <UploadButton />
                    </Grid>
                </Grid>



            </Stack>
            <Grid xs={12} sx={{ bgcolor: '#2196f3', color: 'white', fontWeight: 'bold' }}>
                <Item >NON MANDATORY ATTACHMENTS</Item>
            </Grid>

            <Grid
                container

                xs={6}
                sx={{ flexGrow: 1, bgcolor: "#F5F5F5", border: '2px solid black', margin: 0.5 }}

            >

                <Grid xs={12} sx={{ bgcolor: '#2196f3', color: 'white', fontWeight: 'bold' }}>
                    <Item >DOB Certificate</Item>
                </Grid>

                <Grid xs={6}  >
                    <TextField sx={{ marginTop: 2 }}
                        name="upload-photo"
                        type="file"
                    />
                </Grid>

                <Grid xs={6}>
                    <UploadButton />
                </Grid>



            </Grid>
            <SubButton />
        </Stack>
    );
}
