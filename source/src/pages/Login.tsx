import * as React from "react";
import Container from "@mui/material/Container";
import MuiLink from "@mui/material/Link";
import Copyright from "../utils/Copyright";
import Nav from "../utils/Nav";
import DevApi, { LoginUser } from "../api";
import { User } from "../components/User.component";
import { Box } from "@mui/material";

function App() {
  var [listOfuser, setListOfUser] = React.useState([]);

  React.useEffect(() => {
    DevApi.get_all_users_from_keystore().then((data: LoginUser[]) => {
      setListOfUser(data);
    });
  }, []);

  return (
    <div className="container">
      <Nav />
      <h1>Login</h1>
      <Container
        sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
      ></Container>
      <Container
        sx={{
          display: "flex",
        }}
      >
        {listOfuser.map((user: LoginUser) => {
          return <User user={user}></User>;
        })}
      </Container>
      <Copyright />
    </div>
  );
}

export default App;
