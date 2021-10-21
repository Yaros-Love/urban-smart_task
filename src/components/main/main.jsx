import React, { useRef, useState } from 'react';
import logo from '../../logo.svg';
import {connect} from 'react-redux';
import LogoutButton from '../buttons/logout-button';
import '../app/App.css';
import { ActionCreator } from '../../store/action';
import { AppRoute, AuthorizationStatus } from '../../const/common';

const MainPage = ({authStatus, userLogin, userPassword, redirectToProfile, setAuthStatus}) => {
  const [errorText, setErrorText] = useState(``);
  const [isValid, setNewStatus] = useState(true);

  const loginRef = useRef();
  const passwordRef = useRef();

  const checkValid = () => {
    if (passwordRef.current.value === userPassword && loginRef.current.value === userLogin) {
      setNewStatus(false);
    }
  };

  const onSubmit = () => {
    const isValidLogPass = passwordRef.current.value === userPassword && loginRef.current.value === userLogin;

    if(isValidLogPass) {
      setErrorText('');
      setAuthStatus();
      redirectToProfile();
    } else {
      setErrorText('* Wrong login or password. Try again.')
    }
  };
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit();
  };

  return (
    <React.Fragment>
      <div className="wrapper">
        <header>
          <nav className="header_navigation">
            {authStatus === 'NO_AUTH' ? '' : <LogoutButton/>}
          </nav>
        </header>
        <main className="main">
          <img src={logo} className="main-logo" alt="logo" />
          <p>
            Welcome to the Main page!
          </p>

          <form 
            className="login-form" 
            action="#"
            onSubmit={handleSubmit}>
            <label> Login
              <input 
                type="text"
                required
                onChange={() => checkValid()}
                placeholder=" Insert your login"
                ref={loginRef}
                style={{"borderColor": errorText ? 'red' : ''}}
                />
            </label> 
            <label> Password
              <input
                type="text"
                required
                onChange={() => checkValid()}
                placeholder="Insert your password"
                ref={passwordRef}
                style={{"borderColor": errorText ? 'red' : ''}}
                />
            </label>
            
            <button 
              className="button button--submit" 
              type="submit"
              disabled={!isValid ? false : true}
            >Enter</button>
          </form>
          {errorText ? <p>{errorText}</p> : ''}
        </main>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  authStatus: state.authStatus,
  userLogin: state.userLogin,
  userPassword: state.userPassword,
});

const mapDispatchToProps = (dispatch) => ({
  redirectToProfile() {
    dispatch(ActionCreator.redirectToRoute(AppRoute.PROFILE))
  },
  setAuthStatus() {
    dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
