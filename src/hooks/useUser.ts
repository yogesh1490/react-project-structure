// src/hooks/useUser.ts

import React from 'react';
import { useGetUsersQuery, useGetColumnsQuery } from '../redux/userApiSlice';
import { API_USER_COLUMNS, API_USER_DATA } from '../utils/mock';

interface User {
    name: string;
    dateOfBirth: string | number | Date;
    personality: string[];
  }

export const useUser = () => {

  const { data: usersData = [], isLoading: usersLoading } = useGetUsersQuery();
  const { data: columnsData = [], isLoading: columnsLoading } = useGetColumnsQuery();

  //conside user data received from api
  const users = API_USER_DATA;

  //conside user column received from api
  const columns = API_USER_COLUMNS;

//   const users = usersData.users || [];
//   const columns = columnsData.columns || [];

  const oldestUser = users.reduce((oldest: User, user: User) => {
    if (!oldest || new Date(user.dateOfBirth) < new Date(oldest.dateOfBirth)) {
      return user;
    }
    return oldest;
  }, null as any);

  const youngestUser = users.reduce((youngest:User, user: User) => {
    if (!youngest || new Date(user.dateOfBirth) > new Date(youngest.dateOfBirth)) {
      return user;
    }
    return youngest;
  }, null as any);

  const totalUsers = users.length;


    // Pagination state
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    const handleChangePage = (newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    // Paginate users
    const paginatedUsers = users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return {
    users,
    columns,
    oldestUser,
    youngestUser,
    totalUsers,
    usersLoading,
    columnsLoading,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    paginatedUsers,
  };
};
