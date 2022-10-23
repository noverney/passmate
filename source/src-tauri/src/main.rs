#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod api;

use dcore::gpg::{CreateUserArgs, Gpg};
use dcore::Identity;
use dcore::identity::GetIdentityArgs;
use tauri::api::Error::Command;
use tauri::Error;
use crate::api::{API, User};


fn get_gpg_home() -> String {
    let gpghome = "./.test/gpghome";
    std::fs::create_dir_all("./.test/gpghome");
    String::from(gpghome)
}





// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn create_secret() -> String {
    // todo: get email and name from user

    let mut gpg = Gpg::new();
    let key = gpg
        .create_key(CreateUserArgs {
            email: "info@colomba.link",
            name: "BaselHack2022",
        });
    match key {
        Ok(key) => key.fingerprint,
        Err(err) => err.to_string(),
    }
}

#[tauri::command]
fn get_public_key(fingerprint: &str) -> String {
    // todo: get email and name from user

    println!("get_public_key: {}", fingerprint);
    let mut gpg = Gpg::new();
    let key = gpg.get_public_key(fingerprint);
    println!("get_public_key: ok");
    match key {
        Ok(key) => key.fingerprint,
        Err(err) => err.to_string(),
    }
}



#[tauri::command]
fn get_all_users_from_keystore() -> Result<Vec<User>, String>{
    API::get_all_users_from_keystore()
}



/**
 * The password it
 */
#[tauri::command]
fn login(fingerprint: &str) -> Result<String, String>{
    let mut gpg = Gpg::new();
    let key_with_public_key = gpg.get_public_key(&fingerprint).unwrap();
    let identity = Identity::from_key(key_with_public_key);
    let content = String::from("hello world").as_bytes().to_vec();
    let r = gpg
        .encypt(&content, &identity);
    match r {
        Ok(r) => {
            let d = gpg.decrypt(&r.as_bytes().to_vec());
            match d {
                Ok(d) => Ok(d),
                Err(err) => Err(err.to_string()),
            }
        }
        Err(err) => { Err(err.to_string()) },
    }
}


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, create_secret, get_public_key, login, get_all_users_from_keystore])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
