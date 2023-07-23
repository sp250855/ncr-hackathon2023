import React from 'react';
import { Box, Stack, Paper } from '@mui/material';

function Section({ spacing = 3, children, ...restProps }) {
    return (
        <Stack spacing={spacing} {...restProps}>
            <Paper>{children}</Paper>
        </Stack>
    );
}

export default Section;
