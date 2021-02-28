import React, { useState, useEffect } from 'react';
import AppBarComponent from './components/AppBarComponent';
import SearchComponent from './components/SearchComponent'
import LayoutComponent from './components/LayoutComponent';
import { makeStyles } from '@material-ui/core/styles';
import { getGiphy, getGiphySearch } from './services/giphyService';
import { getPixabay, getPixabaySearch } from './services/pixabayService';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: "0 !important",
        backgroundColor: '#3A3A3C',
        minHeight: '100vh'
    },
    loading: {
        color: '#FFFFFF',
        margin: 'auto'
    }
}));

function App() {
    const classes = useStyles();

    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState("");

    useEffect(() => {
        getData(0);
    }, [])

    const getData = (tab: number) => {
        if (tab === 0) {
            setLoaded(false);
            getGiphy().then((result) => {
                setData(result);
                setLoaded(true);
            })
        } else if (tab === 1) {
            setLoaded(false);
            getPixabay().then((result) => {
                setData(result);
                setLoaded(true);
            })
        }
    }

    const changeTab = (page: number) => {
        setSelected(page);
        getData(page);
    }

    const getLayout = () => {
        if (loaded) {
            return <LayoutComponent tab={selected} giphsData={data} />
        } else {
            return <Typography variant="h6" className={classes.loading}>Loading ...</Typography>;
        }
    }

    const initSearch = () => {
        if (selected === 0) {
            setLoaded(false);
            getGiphySearch(searchPhrase).then((result) => {
                setData(result);
                setLoaded(true);
            })
        } else {
            setLoaded(false);
            getPixabaySearch(searchPhrase).then((result) => {
                setData(result);
                setLoaded(true);
            })
        }
    }

    return (
        <div className={classes.root}>
            <AppBarComponent tab={selected} selectTab={changeTab} />
            <SearchComponent searchValue={searchPhrase} initSearch={initSearch} setSearch={setSearchPhrase} />
            {getLayout()}
        </div>
    );
}

export default App;
