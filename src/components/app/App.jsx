import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";
const Page404 = lazy(() => import('../../pages/Page404')
    .then(({default: Page404}) => ({default: Page404})),
    );
const MainPage = lazy(() => import('../../pages/MainPage')
    .then(({default: MainPage}) => ({default: MainPage})),
    );
const ComicsPag = lazy(() => import('../../pages/ComicsPag')
    .then(({default: ComicsPag}) => ({default: ComicsPag})),
    );
const SingleComicPage = lazy(() => import('../../pages/SingleComicPage')
    .then(({default: SingleComicPage}) => ({default: SingleComicPage})),
);

const App = () => {
    return (
        <Router>
            <div className="app">

                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route exact path="/" element={
                                <MainPage/>
                            }/>
                            <Route exact path="/comics" element={
                                <ComicsPag/>
                            }/>
                            <Route exact path="/comics/:comicId" element={
                                <SingleComicPage/>
                            }/>
                            <Route path="*" element={
                                <Page404/>
                            }/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;