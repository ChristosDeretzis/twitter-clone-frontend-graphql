import { makeStyles } from '@mui/styles';

const sidebarStyles = makeStyles({
    root: {
        maxWidth: 250,
        height: '100vh',
        position: 'fixed',
        fontWeight: '400',
        fontSize: '22px',
        fontFamily: 'Helvetica Neue',
        lineHeight: '120%',

        '& ul': {
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        },

        '& svg': {
            width: '36px',
            height: '36px',
            marginRight: '0.5rem',
            position: 'relative',
            top: '7px',
            color: '#000',
            fontSize: '20px'
        },

        '& span': {
            color: '#000'
        },

        '& li': {
            marginTop: '1rem',
            display: 'block',
            padding: '5px 20px 8px 10px',
            width: 'max-content',
            cursor: 'pointer',

            '& a': {
                textDecoration: 'none',
            },

            '&:hover': {
                backgroundColor: '#dadbdb',
                borderRadius: '9999px',
            }
        },
    },

    selected: {
        '& span': {
            color: '#1d9bf0',
            fontWeight: '700'
        },
        '& svg': {
            fill: '#1d9bf0'
        }
    },

    mainIcon: {
        paddingLeft: '10px',

        '& svg': {
            fill: '#1d9bf0'
        }
    }
    
});

export default sidebarStyles;