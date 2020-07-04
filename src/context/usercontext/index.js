import React, { createContext, useState } from "react";
import { USER } from "../../api";
const UserContext = createContext();
const { Provider } = UserContext;

// every context Object comes with Provider & Consumer object

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ USER, loggedInUser: null }); //initial state

  const handleLogin = () => {
    setUser({ ...user, loggedInUser: USER.name }); // simulating like a logged In User
  };

  const handleLogout = () => {
    setUser({ ...user, loggedInUser: null }); // simulating like a logout
  };

  const widthDraw = (amount) => {
    let {
      USER: { name, totalAmount },
    } = { ...user };
    USER.totalAmount = totalAmount - amount;
    setUser({
      USER,
      loggedInUser: name,
    });
    console.log(user);
  };

  return (
    <Provider
      value={{
        user,
        handleLogin,
        handleLogout,
        widthDraw: (amount) => widthDraw(amount),
        setUserDetails: (user) => setUser(user),
      }}
    >
      {children}
    </Provider>
  );
};

export { UserContext, UserProvider };
