import React from "react";

const UserContext = React.createContext({
  _id: "",
  username: "",
  firstName: "",
  lastName: "",
  accountType: ""
});

export default UserContext;
