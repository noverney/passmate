import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Image from "next/image";
import reactLogo from "../assets/react.svg";
import tauriLogo from "../assets/tauri.svg";
import nextLogo from "../assets/next.svg";
import Api from "../api";



function App() {
  const [greetMsg, setMessage] = useState("");
  const [name, setName] = useState("");



  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      <div className="row">
        <span className="logos">
          <a href="https://nextjs.org" target="_blank">
            <Image
              width={144}
              height={144}
              src={nextLogo}
              className="logo next"
              alt="Next logo"
            />
          </a>
        </span>
        <span className="logos">
          <a href="https://tauri.app" target="_blank">
            <Image
              width={144}
              height={144}
              src={tauriLogo}
              className="logo tauri"
              alt="Tauri logo"
            />
          </a>
        </span>
        <span className="logos">
          <a href="https://reactjs.org" target="_blank">
            <Image
              width={144}
              height={144}
              src={reactLogo}
              className="logo react"
              alt="React logo"
            />
          </a>
        </span>
      </div>

      <p>Click on the Tauri, Next, and React logos to learn more.</p>

      <div className="row">
        <div>
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="button" onClick={async () => {
            let result = await Api.create_secret();
            setMessage(result);
          }}>
            create secrest
          </button>

          <button type="button" onClick={async () => {
            let result = await Api.get_public_key("00C2E4D9C3FBA617D64ACD77676ECB74B52F5A72");
            setMessage(result);
          }}>
            read public key
          </button>


          <button type="button" onClick={async () => {
            Api.login("00C2E4D9C3FBA617D64ACD77676ECB74B52F5A72").catch((e) => {
                console.log(e);
            }).then((result) => {
              console.log(result)
              setMessage(result);
            });
          }}>
            login
          </button>

          <button type="button" onClick={async () => {
            Api.get_all_users_from_keystore().catch((e) => {
              console.log(e);
            }).then((result) => {
              console.log(result)
              setMessage(JSON.stringify(result));
            });
          }}>
            get all users
          </button>

          <button type="button" onClick={async () => {
            Api.init_local_passmate("local-dev-1", "70CE8FE06D9CA9379A276F44E624A58EB3A5EAEA").catch((e) => {
              console.log(e);
            }).then((result) => {
              setMessage(JSON.stringify("ok"));
            });
          }}>
            init local passmate
          </button>

          <button type="button" onClick={async () => {
            Api.add_new_password_entry( {fingerprint: "70CE8FE06D9CA9379A276F44E624A58EB3A5EAEA", url: "testurl", password: "1234", userName: "bhack"}).catch((e) => {
              console.log(e);
            }).then((result) => {
              setMessage(result);
            });
          }}>
           add entry
          </button>

          <button type="button" onClick={async () => {
            Api.get_all_entries( {fingerprint: "70CE8FE06D9CA9379A276F44E624A58EB3A5EAEA"}).catch((e) => {
              console.log(e);
            }).then((result) => {
              console.log(result);
              setMessage(JSON.stringify(result));
            });
          }}>
            get all entries
          </button>


          <button type="button" onClick={async () => {
            Api.sync( {fingerprint: "70CE8FE06D9CA9379A276F44E624A58EB3A5EAEA", remoteUrl: "http://...."}).catch((e) => {
              console.log(e);
            }).then((result) => {
              console.log(result);
              setMessage(JSON.stringify(result));
            });
          }}>
            get all entries
          </button>

        </div>
      </div>

      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
