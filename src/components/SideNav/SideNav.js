import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ButtonGroup } from '@material-ui/core';

const drawerWidth = 80;

function TeamsIcon(props) {
    return (
        <svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity={props.opacity} id="icon-teams" fill-rule="evenodd" clip-rule="evenodd" d="M28.6875 17H21.25V8.5C21.25 7.8625 20.825 7.4375 20.1875 7.4375H18.0625V5.3125C18.0625 4.675 17.6375 4.25 17 4.25H15.9375V1.0625C15.9375 0.425 15.5125 0 14.875 0C14.2375 0 13.8125 0.425 13.8125 1.0625V4.25H12.75C12.1125 4.25 11.6875 4.675 11.6875 5.3125V7.4375H9.5625C8.925 7.4375 8.5 7.8625 8.5 8.5V20.1875H1.0625C0.425 20.1875 0 20.6125 0 21.25V32.9375C0 33.575 0.425 34 1.0625 34H9.5625H12.75H17H20.1875H28.6875C29.325 34 29.75 33.575 29.75 32.9375V18.0625C29.75 17.425 29.325 17 28.6875 17ZM6.375 29.75H3.1875V27.625H6.375V29.75ZM6.375 26.5625H3.1875V24.4375H6.375V26.5625ZM10.625 29.75H7.4375V27.625H10.625V29.75ZM10.625 26.5625H7.4375V24.4375H10.625V26.5625ZM15.9375 18.0625V31.875H13.8125V21.25C13.8125 20.6125 13.3875 20.1875 12.75 20.1875H10.625V9.5625H12.75C13.3875 9.5625 13.8125 9.1375 13.8125 8.5V6.375H15.9375V8.5C15.9375 9.1375 16.3625 9.5625 17 9.5625H19.125V17H17C16.3625 17 15.9375 17.425 15.9375 18.0625ZM22.3125 29.75H19.125V27.625H22.3125V29.75ZM22.3125 26.5625H19.125V24.4375H22.3125V26.5625ZM22.3125 23.375H19.125V21.25H22.3125V23.375ZM26.5625 29.75H23.375V27.625H26.5625V29.75ZM26.5625 26.5625H23.375V24.4375H26.5625V26.5625ZM26.5625 23.375H23.375V21.25H26.5625V23.375Z" fill="white" />
        </svg>

    );
}

function LeadsIcon(props) {
    return (
        <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity={props.opacity} fill-rule="evenodd" clip-rule="evenodd" d="M16 6C16 9.237 13.379 13 10 13C6.621 13 4 9.237 4 6C4 2.691 6.691 0 10 0C13.309 0 16 2.691 16 6ZM20 4H31C31.552 4 32 4.447 32 5C32 5.553 31.552 6 31 6H20C19.448 6 19 5.553 19 5C19 4.447 19.448 4 20 4ZM20 10H31C31.552 10 32 10.447 32 11C32 11.553 31.552 12 31 12H20C19.448 12 19 11.553 19 11C19 10.447 19.448 10 20 10ZM31 16H25C24.448 16 24 16.447 24 17C24 17.553 24.448 18 25 18H31C31.552 18 32 17.553 32 17C32 16.447 31.552 16 31 16ZM25 22H31C31.552 22 32 22.447 32 23C32 23.553 31.552 24 31 24H25C24.448 24 24 23.553 24 23C24 22.447 24.448 22 25 22ZM16.409 15.973C12.009 14.671 7.858 14.696 3.583 15.961C1.439 16.596 0 18.523 0 20.758V27C0 27.553 0.448 28 1 28H19C19.552 28 20 27.553 20 27V20.772C20 18.536 18.557 16.607 16.409 15.973Z" fill="white" />
        </svg>

    );
}

function CampaignsIcon(props) {
    return (
        <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity={props.opacity} fill-rule="evenodd" clip-rule="evenodd" d="M0.866667 0H21.6667C22.1459 0 22.5333 0.3874 22.5333 0.866667V15.6C22.5333 16.0793 22.1459 16.4667 21.6667 16.4667H12.4592L5.77027 22.3193C5.512 22.5446 5.14627 22.5949 4.84207 22.4553C4.5318 22.3149 4.33333 22.0073 4.33333 21.6667V16.4667H0.866667C0.3874 16.4667 0 16.0793 0 15.6V0.866667C0 0.3874 0.3874 0 0.866667 0ZM24.2667 6.93333H26.8667C27.3451 6.93333 27.7333 7.3216 27.7333 7.8V20.8C27.7333 21.2784 27.3451 21.6667 26.8667 21.6667H24.2667V25.1333C24.2667 25.4583 24.0855 25.7556 23.7969 25.9038C23.5023 26.0537 23.1573 26.0251 22.8965 25.8379L17.056 21.6667H9.14853L13.1109 18.2H22.5333C23.491 18.2 24.2667 17.4243 24.2667 16.4667V6.93333Z" fill="white" />
        </svg>

    );
}
function SWIcon(props) {
    return (
        <svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.9941 16.8349C37.9941 11.1752 33.4062 6.58736 27.7465 6.58736C26.8439 6.58736 25.9454 6.70647 25.074 6.94163C21.319 7.73922 18.3316 10.585 16.0101 13.726C14.5106 15.7549 13.0034 17.6151 10.3857 18.1103C7.96706 18.5681 4.66529 17.1744 4.43731 14.4405C4.35036 13.3957 4.65617 12.1205 5.24374 11.2445C6.19651 9.82315 7.96516 11.1436 9.22234 11.2847C10.1274 11.3859 11.1189 11.4298 11.9972 11.1434C13.7534 10.5712 14.1154 9.16665 13.1141 7.73361C12.1286 6.32286 10.4684 5.48565 8.74732 5.49147C7.7623 5.49491 6.29489 5.86158 5.57367 6.59361C6.14784 5.39589 5.33441 3.79301 4.86787 3.12676C3.9393 1.8003 1.52866 0.647963 0.358923 2.34839C-0.456685 3.5339 0.277229 5.85976 0.979588 6.93826C1.36723 7.53354 1.92478 8.09376 2.08214 8.8086C2.25394 9.58859 1.87359 10.286 1.60369 10.9969C1.32319 11.7356 1.04151 12.4954 0.914864 13.2748C3.05772e-05 18.9023 1.55467 23.672 5.53861 27.1007C6.58583 28.0019 7.78207 28.8047 9.01267 29.4353C10.5137 30.204 12.2384 30.8182 13.891 31.1614C15.5459 31.505 17.3352 31.7475 19.0284 31.7475C26.9007 31.7475 33.6408 27.8263 36.4359 22.265C37.422 20.6903 37.9941 18.8299 37.9941 16.8349Z" fill="white" />
            <path d="M30.5409 4.38658C28.9342 3.51788 27.1483 3.45113 25.3983 3.86542C23.6382 4.28265 21.7885 5.61072 19.9491 5.46669C18.0768 5.31978 17.8019 3.28486 18.6821 1.97671C20.6126 -0.891351 25.216 -0.251402 27.6181 1.45379C28.2256 1.88508 28.7855 2.37983 29.2882 2.92969C29.673 3.35022 30.0335 4.11239 30.5409 4.38658Z" fill="white" />
        </svg>
    );
}
function ReportsIcon(props) {
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="icon-reports" opacity={props.opacity} fill-rule="evenodd" clip-rule="evenodd" d="M10.2188 6.9375L6.65625 14.0625H0C0.46875 6.1875 6.9375 0 14.9062 0C22.875 0 29.3438 6.1875 29.9062 14.0625H22.5938C22.2188 14.0625 21.9375 14.3438 21.75 14.625L18.75 20.625L11.9062 6.9375C11.625 6.28125 10.5 6.28125 10.2188 6.9375ZM19.5938 23.0625L23.1562 15.9375H29.8125C29.3438 23.8125 22.875 30 14.9062 30C6.9375 30 0.46875 23.8125 0 15.9375H7.21875C7.59375 15.9375 7.875 15.75 8.0625 15.375L11.0625 9.375L17.9062 23.0625C18.0938 23.4375 18.375 23.625 18.75 23.625C19.125 23.625 19.4062 23.3438 19.5938 23.0625Z" fill="white" />
        </svg>

    );
}
function HelpIcon(props) {
    return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="icon-help" opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM13 21.125C13.8975 21.125 14.625 20.3975 14.625 19.5C14.625 18.6025 13.8975 17.875 13 17.875C12.1025 17.875 11.375 18.6025 11.375 19.5C11.375 20.3975 12.1025 21.125 13 21.125ZM13 8.125C12.35 8.125 11.8625 8.45 11.5375 8.9375L10.725 10.4L7.9625 8.775L8.775 7.3125C9.5875 5.85 11.2125 4.875 13 4.875C15.7625 4.875 17.875 6.9875 17.875 9.75C17.875 12.025 16.4125 13 15.4375 13.65C14.625 14.1375 14.625 14.3 14.625 14.625V16.25H11.375V14.625C11.375 12.5125 12.675 11.5375 13.65 10.8875C14.4625 10.4 14.625 10.2375 14.625 9.75C14.625 8.775 13.975 8.125 13 8.125Z" fill="white" />
        </svg>

    );
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        // marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        background: '#042235',
        boxShadow: "inset -4px 0px 4px rgba(2, 15, 24, 0.569466), inset 0px 1px 3px rgba(0, 0, 0, 0.5)",
        border:"none"
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        // width: theme.spacing(7) + 1,
        // width: '80px',
        [theme.breakpoints.up('sm')]: {
            // width: theme.spacing(9) + 1,
            width: '80px',
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0, 0),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    butt: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    butt2: {
        // background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 3,
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    column: {
        width: 240,
    },
    listitem: {
        justifyContent: 'center'
    },
    linkstyle: {
        textDecoration: 'none',
        color: '#FCF1D1'
    },
    icon: {
        color: '#FFFFFF',
        opacity: '0.3',
        mixBlendMode: 'normal',
    }

}));

export default function SideNav() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(1);
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer)}
                classes={{
                    paper: clsx(classes.drawer, {
                        [classes.drawerClose]: !open,
                    })
                }}
            >
                <ButtonGroup
                    orientation="vertical"
                    style={{ height: "100%" }}>
                    <Button style={{ padding: "27px 0 " }}><svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.9941 16.8349C37.9941 11.1752 33.4062 6.58736 27.7465 6.58736C26.8439 6.58736 25.9454 6.70647 25.074 6.94163C21.319 7.73922 18.3316 10.585 16.0101 13.726C14.5106 15.7549 13.0034 17.6151 10.3857 18.1103C7.96706 18.5681 4.66529 17.1744 4.43731 14.4405C4.35036 13.3957 4.65617 12.1205 5.24374 11.2445C6.19651 9.82315 7.96516 11.1436 9.22234 11.2847C10.1274 11.3859 11.1189 11.4298 11.9972 11.1434C13.7534 10.5712 14.1154 9.16665 13.1141 7.73361C12.1286 6.32286 10.4684 5.48565 8.74732 5.49147C7.7623 5.49491 6.29489 5.86158 5.57367 6.59361C6.14784 5.39589 5.33441 3.79301 4.86787 3.12676C3.9393 1.8003 1.52866 0.647963 0.358923 2.34839C-0.456685 3.5339 0.277229 5.85976 0.979588 6.93826C1.36723 7.53354 1.92478 8.09376 2.08214 8.8086C2.25394 9.58859 1.87359 10.286 1.60369 10.9969C1.32319 11.7356 1.04151 12.4954 0.914864 13.2748C3.05772e-05 18.9023 1.55467 23.672 5.53861 27.1007C6.58583 28.0019 7.78207 28.8047 9.01267 29.4353C10.5137 30.204 12.2384 30.8182 13.891 31.1614C15.5459 31.505 17.3352 31.7475 19.0284 31.7475C26.9007 31.7475 33.6408 27.8263 36.4359 22.265C37.422 20.6903 37.9941 18.8299 37.9941 16.8349Z" fill="white" />
                        <path d="M30.5409 4.38658C28.9342 3.51788 27.1483 3.45113 25.3983 3.86542C23.6382 4.28265 21.7885 5.61072 19.9491 5.46669C18.0768 5.31978 17.8019 3.28486 18.6821 1.97671C20.6126 -0.891351 25.216 -0.251402 27.6181 1.45379C28.2256 1.88508 28.7855 2.37983 29.2882 2.92969C29.673 3.35022 30.0335 4.11239 30.5409 4.38658Z" fill="white" />
                    </svg></Button>
                    {value == 0 ?
                        <Button style={{ padding: "25px 0", boxShadow:"inset -2px 0px 2px rgba(0, 0, 0, 0.11931)", border:"none", backgroundColor: "#2995DA" }}><CampaignsIcon opacity="1" className={classes.icon} /></Button>
                        :
                        <Button onClick={() => setValue(0)} style={{ padding: "25px 0", border: "none" }}><CampaignsIcon opacity="0.3" className={classes.icon} /></Button>
                    }

                    {value == 1 ?
                        <Button style={{ padding: "25px 0",boxShadow:"inset -2px 0px 2px rgba(0, 0, 0, 0.11931)", border:"none", backgroundColor: "#2995DA" }}><TeamsIcon opacity="1" className={classes.icon} /></Button>
                        :
                        <Button onClick={() => setValue(1)} style={{ padding: "25px 0", border: "none" }}><TeamsIcon opacity="0.3" className={classes.icon} /></Button>
                    }

                    {value == 2 ?
                        <Button style={{ padding: "25px 0", boxShadow:"inset -2px 0px 2px rgba(0, 0, 0, 0.11931)", border:"none", backgroundColor: "#2995DA" }}><LeadsIcon opacity="1" className={classes.icon} /></Button>
                        :
                        <Button onClick={() => setValue(2)} style={{ padding: "25px 0", border: "none" }}><LeadsIcon opacity="0.3" className={classes.icon} /></Button>
                    }

                    {value == 3 ?
                        <Button style={{ padding: "25px 0", boxShadow:"inset -2px 0px 2px rgba(0, 0, 0, 0.11931)", border:"none", backgroundColor: "#2995DA" }}><ReportsIcon opacity="1" className={classes.icon} /></Button>
                        :
                        <Button onClick={() => setValue(3)} style={{ padding: "25px 0", border: "none" }}><ReportsIcon opacity="0.3" className={classes.icon} /></Button>
                    }
                    <Button style={{ marginTop: "auto", border: "none", padding: "25px 0" }}><HelpIcon className={classes.icon} /></Button>
                </ButtonGroup>

            </Drawer>

        </div>
    );
}
