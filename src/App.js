import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import IndexPage from "./pages/diary/IndexPage";
import CreateDiaryPage from "./pages/diary/CreateDiaryPage";
import ProfilePage from "./pages/account/ProfilePage";
import ChangePasswordPage from "./pages/account/ChangePasswordPage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true}>
                    <IndexPage/>
                </Route>

                <Route path="/new">
                    <CreateDiaryPage/>
                </Route>

                <Route path="/profile">
                    <ProfilePage/>
                </Route>

                <Route path="/change-password">
                    <ChangePasswordPage/>
                </Route>

            </Switch>
        </BrowserRouter>
    );
}

export default App;
