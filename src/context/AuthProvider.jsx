import { useReducer } from "react";

import authReducer from "../reducers/authReducer";
import { decodeJWT } from "../utils/jwt";
import AuthContext from "./AuthContext";

const INITIAL_STATE = {
    user: {
        email: null,
        password: null,
    },
    accessToken: null,
    isAuthenticated: false,
    };

    const AuthProvider = ({ children }) => {
        const init = (initialState) => {
            const accessToken = localStorage.getItem('accessToken');

            if (accessToken===null) {
                return initialState;
            }

            const { sub: email, password } = decodeJWT(accessToken);

            const user = {
                email,
                password,
            };

            return {
                ...initialState,
                accessToken,
                user,
                isAuthenticated: true,
            };
        };

    const [authState, dispatch] = useReducer(authReducer, INITIAL_STATE, init);

    const setAccessToken = (accessToken) => {
        dispatch({
            type: 'SET_ACCESS_TOKEN',
            payload: accessToken,
        });
        console.log("setAccessToken " + accessToken);
        localStorage.setItem('accessToken', accessToken);
    }; 
    
    const deleteToken = () => {
        localStorage.removeItem('accessToken');
    };

    const logout = () => {
        deleteToken();
        dispatch({
            type: 'LOGOUT',
            payload: INITIAL_STATE,
        });
    };

    return (
        <AuthContext.Provider
            value={{
                authState,
                setAccessToken,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

