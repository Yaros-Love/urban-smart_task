import React from 'react';
import {connect} from 'react-redux';
import logo from '../../logo.svg';
import LogoutButton from '../buttons/logout-button';
import '../app/App.css';

const ProfilePage = ({userLogin, authStatus}) => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <header>
          <nav className="header_navigation">
            <h1 className="header_user-email">{userLogin}</h1>
            {authStatus === 'NO_AUTH' ? '' : <LogoutButton/>}
          </nav>
        </header>
        <main className="main">
          <img src={logo} className="main-logo" alt="logo" />
          <p>
            Welcome to your Profile page!
          </p>
        </main>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  userLogin: state.userLogin,
  authStatus: state.authStatus,
})

export default connect(mapStateToProps, null)(ProfilePage);
