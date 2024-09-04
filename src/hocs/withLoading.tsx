import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { StyledBox } from './withLoading.style'; // Import the styled component

interface WithLoadingProps {
  isLoading: boolean;
  loader?: React.ReactNode;
}

const withLoading = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return (props: P & WithLoadingProps) => {
    const { isLoading, loader, ...restProps } = props as WithLoadingProps;

    if (isLoading) {
      return (
        <StyledBox>
          {loader || <CircularProgress />}
        </StyledBox>
      );
    }

    return <WrappedComponent {...(restProps as P)} />;
  };
};

export default withLoading;
