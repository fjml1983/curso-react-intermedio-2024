import React from 'react';

const AuthContext = React.createContext();

export const useAuth = () => React.useContext(AuthContext);

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const login = (email, password) => {
        //TODO: Logica para validar en el backend        
        setCurrentUser({email, password});
        window.location.href = '/dashboard';
    }
    const logout = () => {
        setCurrentUser(null);
        window.location.href = '/home';
    };
    return (
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};