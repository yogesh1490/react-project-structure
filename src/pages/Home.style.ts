// src/pages/Home.style.ts

import { styled } from '@mui/material/styles';
import { Box, TableCell, TableRow, Card, } from '@mui/material';

// Styled components for the page
export const StyledBox = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

export const StatCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2),
    textAlign: 'center',
    margin: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
}));

// Styled TableRow component
export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
}));

// Styled TableCell component
export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightMedium,
}));