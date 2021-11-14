import {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import('../../pages/Page404')
    .then(({default: Page404}) => ({default: Page404})),
    );
const MainPage = lazy(() => import('../../pages/MainPage')
    .then(({default: MainPage}) => ({default: MainPage})),
    );
const ComicsPage = lazy(() => import('../../pages/ComicsPage')
    .then(({default: ComicsPage}) => ({default: ComicsPage})),
    );
const SingleCharacterLayout = lazy(() => import('../../pages/singleCharLayout/SingleCharacterLayout')
    .then(({default: SingleCharacterLayout}) => ({default: SingleCharacterLayout})),
    );
const SinglePage = lazy(() => import('../../pages/SinglePage')
    .then(({default: SinglePage}) => ({default: SinglePage})),
    );
const SingleComicLayout = lazy(() => import('../../pages/singleComicLayout/SingleComicLayout')
    .then(({default: SingleComicLayout}) => ({default: SingleComicLayout})),
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
                                <ComicsPage/>
                            }/>
                            <Route exact path="/comics/:id" element={
                                // <SingleComicLayout/>
                                <SinglePage Component={SingleComicLayout} dataType='comic'/>
                            }/>
                            <Route exact path="/characters/:id" element={
                                <SinglePage Component={SingleCharacterLayout} dataType='character'/>
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