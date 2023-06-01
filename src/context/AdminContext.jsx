import React, { createContext, useState } from "react";

const AdminContext = createContext();

const AdminProvider = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      {props.children}
    </AdminContext.Provider>
  );
};
const AdminConsumer = AdminContext.Consumer;

export { AdminContext, AdminProvider, AdminConsumer };
