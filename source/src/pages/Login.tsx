import * as React from "react";
import Container from "@mui/material/Container";
import MuiLink from "@mui/material/Link";
import Copyright from "../utils/Copyright";
import Nav from "../utils/Nav";
import DevApi, { LoginUser } from "../api";
import { User } from "../components/User.component";
import { Box } from "@mui/material";
import { useLocalStorage } from "../hooks/userStorage.hook";

function App() {
  var [listOfuser, setListOfUser] = React.useState([]);

  const [_, setFingerPrint] = useLocalStorage("fingerPrint", undefined)

  React.useEffect(() => {
    DevApi.get_all_users_from_keystore().then((data: LoginUser[]) => {
      setListOfUser(data);
    });
  }, []);

  var handleLogin = (user: LoginUser) => {
      DevApi.login(user.figerprint).then((data: string) => {
        setFingerPrint(data);
        window.location.href = "PasswordOverview"
      })
  }

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
          return <div onClick={() => handleLogin(user)}><User user={user}></User></div>;
        })}
      </Container>
      <Copyright />
    </div>
  );
}

export default App;
