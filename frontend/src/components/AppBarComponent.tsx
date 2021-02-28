import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#2C2929'
    },
    buttons: {
        marginLeft: "20px",
        color: "#FFFFFF",
        "&:hover": {
            backgroundColor: "#555558"
        }
    },
    selectedButton : {
        marginLeft: '20px',
        color: "#FFFFFF",
        backgroundColor: "#555558",
        "&:hover": {
            backgroundColor: "#555558"
        }
    },
    title: {
        color: "#FFFFFF"
    },
}));

export default function AppBarComponent(props: any) {
    const classes = useStyles();

    const buttonClick = (tab: number) => {
        props.selectTab(tab);
    }

    return (
        <div>
            <AppBar className={classes.root} color="inherit" position="static">
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        Giphy & Pixabay Viewer
                    </Typography>
                    <Button className={props.tab === 0 ? classes.selectedButton : classes.buttons} onClick={() => buttonClick(0)}>
                        Giphy
                    </Button>
                    <Button className={props.tab === 1 ? classes.selectedButton : classes.buttons} onClick={() => buttonClick(1)}>
                        Pixabay
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
