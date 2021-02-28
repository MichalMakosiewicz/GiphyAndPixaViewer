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

interface LayoutProps {
    tab: number;
    giphsData: Object[]
}

export default function LayoutComponent(props: LayoutProps) {

    const classes = useStyles();
    const { tab, giphsData } = props;

    const renderGiphs = () => {
        return giphsData.map((giphData: any) => {
            if (tab === 0) {
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
