import React, {useState} from 'react';
import AppBanner from "../components/appBanner/AppBanner";
import ErrorBoundary from "../components/errorBoundary/errorBoundary";
import ComicsList from "../components/comicsList/ComicsList";

const ComicsPag = () => {

    const [selectedChar, setSelectedChar] = useState(null)

    const onCharSelected = (id) => {
        setSelectedChar(id);
    }

    return (
        <>
            <AppBanner/>
            <ErrorBoundary>
                <ComicsList onCharSelected={onCharSelected}/>
            </ErrorBoundary>
        </>
    );
};

export default ComicsPag;