import { Drawer, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components using Material-UI's styled API
export const Root = styled('div')({
  display: 'flex',
});

export const StyledDrawer = styled(Drawer)({
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 240,
    boxSizing: 'border-box',
  },
});

export const Content = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

export const CalendarBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100%',
}));


export const StyledBackgroundImageBox = styled(Box)(({ theme }) => ({
  backgroundImage: 'url("/Users/yogesh/react-project-structure/src/assets/care-edge.jpg")', // Replace with your image path
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
}));
