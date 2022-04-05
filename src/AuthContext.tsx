import React from "react";
import { createContext, useReducer } from "react";
import { User, userActions, userReducer } from "@/reducer";
import { Navigate } from "react-router-dom";

const USER = "USER";

type AuthContext = {
  user: User;
  token: string | null;
  onLogin: (l: string) => void;
  onLogout: () => void;
};

const initialValue: AuthContext = {
  user: localStorage.getItem(USER),
  token: null,
  onLogin: () => {},
  onLogout: () => {},
};

export const AuthContext = createContext(initialValue);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialValue);

  const onLogin = (l: string) => {
    dispatch({ type: userActions.LOGIN, payload: l });
    localStorage.setItem(USER, l);
  };

  const onLogout = () => {
    dispatch({ type: userActions.LOGOUT });
    localStorage.removeItem(USER);
  };

  const user = state.user;
  const token = "token";
  return (
    <AuthContext.Provider value={{ onLogin, onLogout, user, token }}>
      {children}
    </AuthContext.Provider>
  );
};
