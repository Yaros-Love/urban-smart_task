import {ActionType} from './action';
import {AuthorizationStatus} from '../const/common';

const initialState = {
  authStatus: AuthorizationStatus.NO_AUTH,
  userLogin: 'developer21',
  userPassword: '123456',
};

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authStatus: action.payload,
      };

      case ActionType.RESET_USER:
        return {
          ...state,
          authStatus: AuthorizationStatus.NO_AUTH,
        };
  };
  return state;
};

export {reducer};
