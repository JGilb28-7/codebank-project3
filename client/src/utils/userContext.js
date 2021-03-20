import React from "react";

const UserContext = React.createContext({
  _id: "",
  username: "",
  firstName: "",
  lastName: "",
  accountType: "",
  initialDep:"",
  email: "",
  accountBalance1:"",
  accountNum1:"",
  phoneNumber:"",



});

export default UserContext;
