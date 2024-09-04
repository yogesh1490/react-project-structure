import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { CssBaseline, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { StyledDrawer, Content, CalendarBox, StyledBackgroundImageBox, Root } from './App.style'



const App: React.FC = () => {
  return (
    <Root>
      <StyledDrawer variant="permanent">
        <List>
          <ListItem button component={Link as any} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link as any} to="/about">
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={Link as any} to="/contact">
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </StyledDrawer>
      <Content>
        <Outlet /> {/* This renders the current route's element */}
        <CalendarBox /> {/* You can add content or additional styles here */}
      </Content>
    </Root>
  );
};

export default App;
