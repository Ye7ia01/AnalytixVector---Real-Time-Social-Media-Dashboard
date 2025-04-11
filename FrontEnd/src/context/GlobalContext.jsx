import { createContext, useContext, useReducer } from "react";


const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

//!to the app component
const AuthProvider = ({ children }) => {
  function reducer(state, action) {
    switch (action.type) {
      case "setUserData": {
        return {
          ...state,
          userData: action.payload,
        };
      }

      default:
        throw Error("Unknown action: " + action.type);
    }
  }
  const [AuthState, AuthDispatch] = useReducer(reducer, {
    userData: JSON.parse(localStorage.getItem("userData")) || null,
  });

  return (
    <AuthStateContext.Provider value={AuthState}>
      <AuthDispatchContext.Provider value={AuthDispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
//!to access the state
const useAuthState = () => useContext(AuthStateContext);

//!to access the dispatch method
const useAuthDispatch = () => useContext(AuthDispatchContext);
export { AuthProvider, useAuthState, useAuthDispatch };
