import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {AuthorizationStatus, AppRoute} from '../../const/common';
import {connect} from 'react-redux';

const PrivateRoute = ({render, path, exact, authStatus}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={AppRoute.ROOT} />
        );
      }}
    />  
  );
};

const mapStateToProps = (state) => ({
  authStatus: state.authStatus,
});

export default connect(mapStateToProps)(PrivateRoute);
