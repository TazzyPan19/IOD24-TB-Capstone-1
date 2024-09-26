import React, { useContext, createContext, useReducer } from "react";

export const AccountContext = createContext();

const userReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_ACCOUNT" : 
            return { ...state, currentAccountUser: action.payload } 
        default:
            return state;
    }
}

const initialState = {
    currentAccountUser: { 
        firstName: "Account", 
        lastName: "", 
        emailAddress: "", 
        phoneNumber: "",
        password: "",
        donor: null
    }
}

export const UserProvider = (props) => {
    const [state, dispatch] = useReducer(userReducer, initialState)

    const handleUpdateAccount = (user) => {
        dispatch({ type: "UPDATE_ACCOUNT", payload: user})
    }

    return (
        <AccountContext.Provider value={{...state, handleUpdateAccount}}>
            {props.children}
        </AccountContext.Provider>
    );
}

export const useAccountContext = () => {
    return useContext(AccountContext);
}

export default useAccountContext;