import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '10px',
        padding: '2px 4px',
        display: 'flex',
        justifyContent: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

interface SearchProps {
    searchValue: string;
    initSearch: () => void
    setSearch: (value: string) => void
}

export default function SearchComponent(props: SearchProps) {
    const classes = useStyles();
    const { searchValue, initSearch, setSearch } = props;

    const updateSearch = (event: any) => {
        setSearch(event.target.value);
    }

    const search = () => {
        initSearch()
    }

    return (
        <div className={classes.root}>
            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={(event) => {
                        updateSearch(event);
                    }}
                />
                <IconButton onClick={search} className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    )
}
