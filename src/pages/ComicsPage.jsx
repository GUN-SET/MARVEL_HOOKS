import React, {useState} from 'react';
import {Helmet} from "react-helmet";
import AppBanner from "../components/appBanner/AppBanner";
import ErrorBoundary from "../components/errorBoundary/errorBoundary";
import ComicsList from "../components/comicsList/ComicsList";

const ComicsPage = () => {

    const [selectedChar, setSelectedChar] = useState(null)

    const onCharSelected = (id) => {
        setSelectedChar(id);
    }

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Page with list of our comics"
                />
                <title>Comics page</title>
            </Helmet>
            <AppBanner/>
            <ErrorBoundary>
                <ComicsList onCharSelected={onCharSelected}/>
            </ErrorBoundary>
        </>
    );
};

export default ComicsPage;