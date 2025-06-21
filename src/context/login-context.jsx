import { Children, createContext, useContext, useReducer } from "react";
import loginReducer from "../reducers/loginReducer";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const initialState = {
     userName : '',
     password: '',
     token  : {token:localStorage.getItem('token')||'' }
  };
  
  const [{userName , password ,token}, loginDispatch] = useReducer(loginReducer, initialState);
  return (
    <LoginContext.Provider value={{ userName,password,token, loginDispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

const useLogin = () => useContext(LoginContext);

export { LoginProvider, useLogin };
