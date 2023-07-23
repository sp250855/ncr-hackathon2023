import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Section from '@/common/Section';

function User() {
    return (
        <Box className="userlogin">
            <Typography variant="h2" sx={{ mb: -2 }}>
                Order Food🥪
            </Typography>
            <Section className="userlogin_section">
                <Box
                    component="form"
                    sx={{
                        py: 5,
                        px: 3,
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Box>
                        <TextField
                            required
                            id="outlined-required"
                            label="Enter Name"
                            // error
                            // helperText="Incorrect entry."
                            margin="normal"
                            fullWidth
                            sx={{
                                mb: 3,
                            }}
                            InputLabelProps={{ shrink: true }}
                            placeholder="Please enter your name"
                        />
                    </Box>
                    <Button variant="contained" fullWidth size="large">
                        Login
                    </Button>
                </Box>
            </Section>
        </Box>
    );
}

export default User;
