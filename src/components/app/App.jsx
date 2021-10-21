import MainPage from '../main/main';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import ProfilePage from '../profile/profile';
import hashHistory from '../../browser-history';
import {AppRoute} from '../../const/common';
import './App.css';
import PrivateRoute from '../private-route/private-route';

const App = () => {
  return (
    <BrowserRouter history={hashHistory}>
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            <MainPage />
          </Route>
          <PrivateRoute
          exact
          path={AppRoute.PROFILE}
          render={() => <ProfilePage />}>
          </PrivateRoute>
          
        </Switch>
    </BrowserRouter>
  );
};

export default App;
