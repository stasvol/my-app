import React, {Component, Suspense} from 'react';
import {BrowserRouter, withRouter, Switch, Route, Redirect} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";

import store from "./redux/reduxStore";
import {withLazySuspense} from "./Hoc/withLazySuspense";
import {initializeApp} from "./redux/app_reducer";
import Music from './components/Music/Music';
import NavContainer from "./components/Nav/NavContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";
import SettingContainer from "./components/Settings/SettingContainer";
import NewsContainer from "./components/News/NewsContainer";
import Preloader from "./components/common/preloader/preloader";
import Error from "./Error/error";

import './App.css';

const DialogContainer = React.lazy(() => import("./components/Dialogs/DialogContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const UserContainer = React.lazy(() => import("./components/Users/UserContainer"));



class App extends Component {

    componentDidMount(props) {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            // return <img src={'https://cdn.segodnya.ua/img/gallery/5975/59/615213_main.jpg'}/>
            return <Preloader/>
        }
        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <NavContainer/>
                <div className={'app-pages'}>

                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path={'/'} render={() => <Redirect to={'/Profile'} />}/>
                            <Route path={'/Dialogs'} render={() => <DialogContainer />}/>
                            <Route path={'/Profile/:userId?'} render={() => <ProfileContainer/>}/>
                            <Route path={'/User'} render={withLazySuspense(() => <UserContainer/>)}/>
                            <Route path={'/Music/vk'} render={() => <div>vk</div>}/>
                            <Route exact path={'/Music'} render={() => <Music/>}/>
                            <Route path={'/Login'} render={() => <Login/>}/>
                            <Route  path={'/News/:userId?'} render={() => <NewsContainer/>}/>
                            <Route path={'/Setting'} render={() => <SettingContainer />}/>

                            <Route path={'*'} render={() => <Error/>}/>
                        </Switch>
                    </Suspense>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    // auth: state.auth,
    // isAuth: state.auth.isAuth,
    initialized: state.app.initialized,


});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

let MyApp = () => (
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer state={store.getState()}/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
)
export default MyApp