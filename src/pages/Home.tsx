import React from 'react';
import {
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    TablePagination,
    Paper,
    Grid,
    Chip,
} from '@mui/material';
import { useHome } from '../hooks/useHome';
import withLoading from '../hocs/withLoading';
import STRINGS  from '../utils/strings';
import CONSTANT from '../utils/constants';
import { StatCard, StyledBox, StyledTableRow, StyledTableCell } from './Home.style';

// Main component
const Home: React.FC = () => {

    // Use custom hook to get data
    const {
        users,
        columns,
        oldestUser,
        youngestUser,
        totalUsers,
        page,
        rowsPerPage,
        handleChangePage,
        handleChangeRowsPerPage,
        paginatedUsers,
    } = useHome();

    return (
        <Container>
            <StyledBox>
                <Typography variant="h4" gutterBottom>{STRINGS.HOME.HOME_TITLE}</Typography>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={4} md={4}>
                        <StatCard>
                            <Typography variant="h6">{STRINGS.HOME.OLDEST_USER_TITLE}</Typography>
                            <Typography variant="h5">{oldestUser?.name}</Typography>
                            <Typography variant="body1">{new Date(oldestUser?.dateOfBirth).toDateString()}</Typography>
                        </StatCard>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <StatCard>
                            <Typography variant="h6">{STRINGS.HOME.YOUNGEST_USER_TITLE}</Typography>
                            <Typography variant="h5">{youngestUser?.name}</Typography>
                            <Typography variant="body1">{new Date(youngestUser?.dateOfBirth).toDateString()}</Typography>
                        </StatCard>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <StatCard>
                            <Typography variant="h6">{STRINGS.HOME.TOTAL_USERS_TITLE}</Typography>
                            <Typography variant="h5">{totalUsers}</Typography>
                        </StatCard>
                    </Grid>
                </Grid>
            </StyledBox>

            <StyledBox>
                <Typography variant="h5" gutterBottom>{STRINGS.HOME.USER_LIST_TITLE}</Typography>
                <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                    <Table>
                        <TableHead>
                            <StyledTableRow>
                                {columns.map((column: any) => (
                                    <StyledTableCell key={column.id}>
                                        <TableSortLabel>
                                            {column.label}
                                        </TableSortLabel>
                                    </StyledTableCell>
                                ))}
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedUsers.map((user: any) => (
                                <TableRow key={user.id}>
                                    {columns.map((column: any) => (
                                        <TableCell key={column.id}>
                                            {Array.isArray(user[column.id]) ? (
                                                user[column.id].map((trait: string, i: number) => (
                                                    <Chip key={i} label={trait} sx={{ margin: 0.5 }} />
                                                ))
                                            ) : (
                                                user[column.id]?.toString() || CONSTANT.NA
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={users.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={(event, newPage) => handleChangePage(newPage)}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </StyledBox>
        </Container>
    );
};

export default withLoading(Home);
