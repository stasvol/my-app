import React, {Component, Suspense, useEffect} from 'react';
import {BrowserRouter, withRouter, Switch, Route, Redirect} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";

import store from "./Redux/reduxStore";
import {withLazySuspense} from "./Hock/withLazySuspense";
import {initializeApp} from "./Redux/app_reducer";
import NavContainer from "./Components/Nav/NavContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Preloader from "./Components/Common/preloader/preloader";
// import Music from './Components/Music/Music';
// import LoginContainer from "./Components/Login/loginContainer";
// import SettingContainer from "./Components/Settings/SettingContainer";
// import NewsContainer from "./Components/News/NewsContainer";
// import Error from "./Error/error";
import {
    PathRedirect, PathVk, PathMusic, PathLogin,
    PathNewsContainer, PathSettingContainer, PathError,
    // PathDialogContainer,
    // PathProfileContainer,
    // PathUserContainer,
} from "./PathPages/PathPages";

import './App.css';
// const DialogContainer = React.lazy(() => import("./Components/Dialogs/DialogContainer"));
// const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"));
// const UserContainer = React.lazy(() => import("./Components/Users/UserContainer"));
const PathDialogContainer = React.lazy(() => import("./PathPages/PathPages"));
const PathProfileContainer = React.lazy(() => import("./PathPages/PathPages"));
const PathUserContainer = React.lazy(() => import("./PathPages/PathPages"));

const App = ({initialized}) => {
    // componentDidMount(props) {
    //     this.props.initializeApp()
    // }
    useEffect(()=>{
        initializeApp()
    },[initializeApp])

       if(!initialized){
           return (
               <>
               <Preloader/>
               <img className='images' src={'https://cdn.segodnya.ua/img/gallery/5975/59/615213_main.jpg'}/>
               </>
           )
       }
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
                            <Route path={'/Login'} render={PathLogin}/>
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