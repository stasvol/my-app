import React, {Component, Suspense, useEffect} from 'react';
import {BrowserRouter, withRouter, Switch, Route, Redirect} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";

import store from "./Redux/reduxStore";
import {withLazySuspense} from "./Hock/withLazySuspense";
import {initializeApp} from "./Redux/app_reducer";
import Music from './Components/Music/Music';
import NavContainer from "./Components/Nav/NavContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/login";
import SettingContainer from "./Components/Settings/SettingContainer";
import NewsContainer from "./Components/News/NewsContainer";
import Preloader from "./Components/Common/preloader/preloader";
import Error from "./Error/error";

import './App.css';
import {
    PathRedirect,
    PathDialogContainer,
    PathProfileContainer,
    PathUserContainer,
    PathVk, PathMusic, PathNewsContainer, PathSettingContainer, PathError
} from "./PathPages/PathPages";

// const DialogContainer = React.lazy(() => import("./Components/Dialogs/DialogContainer"));
// const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"));
// const UserContainer = React.lazy(() => import("./Components/Users/UserContainer"));
PathDialogContainer = React.lazy(() => import("./PathPages/PathPages"));
PathProfileContainer = React.lazy(() => import("./PathPages/PathPages"));
PathUserContainer = React.lazy(() => import("./PathPages/PathPages"));




const App = () => {

    // componentDidMount(props) {
    //     this.props.initializeApp()
    // }
    useEffect(()=>{
        initializeApp()
    },[initializeApp])

        !initialized && <Preloader/> &&
        <img src={'https://cdn.segodnya.ua/img/gallery/5975/59/615213_main.jpg'}/>


        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <NavContainer/>
                <div className={'app-pages'}>

                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path={'/'} render={PathRedirect}/>
                            <Route path={'/Dialogs'} render={PathDialogContainer}/>
                            <Route path={'/Profile/:userId?'} render={PathProfileContainer}/>
                            <Route path={'/User'} render={withLazySuspense(PathUserContainer)}/>
                            <Route path={'/Music/vk'} render={PathVk}/>
                            <Route exact path={'/Music'} render={PathMusic}/>
                            <Route path={'/Login'} render={() => <Login/>}/>
                            <Route  path={'/News/:userId?'} render={PathNewsContainer}/>
                            <Route path={'/Setting'} render={PathSettingContainer}/>

                            <Route path={'*'} render={PathError}/>
                        </Switch>
                    </Suspense>
                </div>
            </div>
        );
}

const mapStateToProps = ({app:{initialized}}) => ({
    // auth: state.auth,
    // isAuth: state.auth.isAuth,
    // initialized: state.app.initialized,
    initialized
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const MyApp = () => (
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer state={store.getState()}/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
)
export default MyApp