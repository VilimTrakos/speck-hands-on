import React, { createContext, useState } from "react";

const LoggedInContext = createContext();

const LoggedInProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {props.children}
    </LoggedInContext.Provider>
  );
};
const LoggedInConsumer = LoggedInContext.Consumer;

export { LoggedInContext, LoggedInProvider, LoggedInConsumer };
