import { Box } from "@mui/material";
import React from "react";
import { LoginUser } from "../api";

interface UserProbs {
  user: LoginUser;
}
export const User: React.FunctionComponent<UserProbs> = ({ user }) => {
  return <Box sx={{border: '1px solid grey', margin: 1}}><div style={{"padding": "18px"}}> {user.userId}</div></Box>;  
};
