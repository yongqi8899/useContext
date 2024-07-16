import { createContext, useState } from 'react';

export const AuthenticationContext = createContext({
    token: "",
    isLoginedIn: false,
    onLogin: (token, expTime) => {},
    onLogout: () => {},
});

const AuthenticationProvider = ({ children }) => {
    const loginHandler = ()=>{

    }

    const contextValue = {
        token: token,
        isLoginedIn: isLoginedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
    }

    return (
        <AuthenticationContext.Provider value={{ isLogin, setIsLogin }}>
        {children}
        </AuthenticationContext.Provider>
    );  
};

export default AuthenticationProvider