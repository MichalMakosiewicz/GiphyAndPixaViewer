import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%'
    },
    img: {
        margin: '4px',
        borderRadius: '3%'
    }
}));

export default function LayoutComponent(props: any) {

    const classes = useStyles();

    const renderGiphs = () => {
        return props.giphsData.map((giphData: any) => {
            if (props.tab === 0) {
                return <img className={classes.img} key={giphData.id} src={giphData.images.fixed_height.url} />
            } else {
                return <img className={classes.img} key={giphData.id} src={giphData.previewURL} />
            }
        });
    }
    
    return (
        <div className={classes.root}>
            {renderGiphs()}
        </div>
    )
}
