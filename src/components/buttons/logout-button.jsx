import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import '../app/App.css';

const LogoutButton = ({resetUser}) => {
  return (
    <button 
      className="button"
      onClick={resetUser}>  
    Logout
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
    resetUser() {
      dispatch(ActionCreator.resetUSer());
    },
});

export default connect(null, mapDispatchToProps)(LogoutButton);
