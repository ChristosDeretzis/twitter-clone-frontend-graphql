import React from 'react';

import { ListItemIcon, MenuItem } from '@mui/material';
import Logout from '@mui/icons-material/Logout';
import client from '../../apollo/client';
import { IS_LOGGED_IN } from '../../queries/User';

const UserLogout = () => {

    const handleLogout = () => {
        localStorage.clear();
        client.writeQuery({
            query: IS_LOGGED_IN,
            data: {
                IsLoggedIn: false,
                User: null
            }
        })
    };

    return (
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
    );
};

export default UserLogout;