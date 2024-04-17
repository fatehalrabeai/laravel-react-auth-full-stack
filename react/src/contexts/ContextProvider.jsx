import {createContext, useContext, useState} from "react";

// createContext = accepts default values
const StateContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {}
})

// note: we're exposing setUser, setToken for auto-completion purposes
export const ContextProvider = ({children}) => {
  // create stat for user
  const [user, setUser] = useState({
    name: 'Fateh'
  });
  const [token, _setToken] = useState(null);

  const setToken = (token) => {
    _setToken(token)
    // set the token in local storage or session storage
    if(token){
      localStorage.setItem('ACCESS_TOKEN', token);
    }else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  }
  // note: value={{ }} double curly braces means that I'm going to pass an object
  return (
    <StateContext.Provider value={{
      user,
      token,
      setUser,
      setToken
    }} >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
