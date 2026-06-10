import { Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Box } from '@mui/material';
import { Link } from '@tanstack/react-router';
import type { AppSidebarProps } from '../model/appSidebar.types';

const drawerWidth = 240;

export const AppSidebar = ({ items }: AppSidebarProps) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          background:
            'linear-gradient(180deg, rgba(27,23,20,0.98), rgba(16,13,12,0.98))',
          borderRight: '1px solid rgba(199,155,107,0.16)',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto', px: 1.5, py: 2 }}>
        <List sx={{ display: 'grid', gap: 0.75 }}>
          {items.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                  borderRadius: 2,
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'text.primary',
                    backgroundColor: 'rgba(150,10,0,0.11)',
                  },
                  '&[data-status="active"]': {
                    color: '#fff8f0',
                    backgroundColor: 'rgba(150,10,0,0.2)',
                    border: '1px solid rgba(197,34,23,0.32)',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontWeight: 700,
                      fontSize: 14,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};



