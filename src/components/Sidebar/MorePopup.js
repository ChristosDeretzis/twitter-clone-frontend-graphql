import React from 'react';
import { Menu } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import UserLogout from '../../containers/Auth/Logout';

const MorePopup = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <div
                onClick={handleClick}>
                <MoreHorizIcon />
                <span>More</span>
            </div>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <UserLogout />
                </Menu>
        </div>
    );
};

export default MorePopup;