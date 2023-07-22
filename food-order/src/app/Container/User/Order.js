import React from 'react';
import {
    Box,
    Button,
    Typography,
    FormGroup,
    FormControlLabel,
    Checkbox,
    ListItem,
    ListItemButton,
    List,
    IconButton,
    ListItemIcon,
    ListItemText,
    Divider,
    ListItemAvatar,
    Avatar,
    Badge,
    Chip,
} from '@mui/material';
// import CommentIcon from '@mui/icons-material/Comment';
import Section from '@/app/common/Section';

function UserOrder() {
    return (
        <>
            <Typography variant="h2" sx={{ textAlign: 'center', pt: 4 }}>
                Order
            </Typography>
            <Section sx={{ my: 2 }}>
                <Box>
                    <List
                        sx={{
                            width: '100%',
                        }}
                    >
                        {[0, 1, 2, 3].map((value) => {
                            const labelId = `checkbox-list-label-${value}`;

                            return (
                                <>
                                    <ListItem
                                        key={value}
                                        secondaryAction={
                                            <Checkbox
                                                edge="end"
                                                // onChange={handleToggle(value)}
                                                // checked={
                                                //     checked.indexOf(value) !==
                                                //     -1
                                                // }
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        }
                                        disablePadding
                                    >
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                {/* <Avatar
                                                    alt={`Avatar n°${
                                                        value + 1
                                                    }`}
                                                    src={`/static/images/avatar/${
                                                        value + 1
                                                    }.jpg`}
                                                /> */}
                                                🍣
                                            </ListItemAvatar>
                                            <ListItemText
                                                id={labelId}
                                                primary={`Line item ${
                                                    value + 1
                                                }`}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider />
                                </>
                            );
                        })}
                    </List>
                </Box>
            </Section>
            <Button variant="contained" fullWidth size="large" sx={{ mb: 4 }}>
                Order
                <Chip label="100" color="primary" variant="contained" />
            </Button>
        </>
    );
}

export default UserOrder;
