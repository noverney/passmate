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
use crate::api::{API, PasswordEntry, User};


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

#[tauri::command]
fn init_local_passmate(device_name: &str, fingerprint: &str) -> Result<(), String>{
    API::init_local_passmate(device_name, fingerprint)
}

#[tauri::command]
fn add_new_password_entry(fingerprint: &str, user_name: &str, password: &str, url: &str) -> Result<String, String>{
    API::add_new_password_entry(fingerprint, user_name,  password, url)
}


#[tauri::command]
fn get_all_entries(fingerprint: &str) -> Result<Vec<PasswordEntry>, String>{
    API::get_all_entries(fingerprint)
}


#[tauri::command]
fn update_entry_password(fingerprint: &str, uuid: &str, password: &str) -> Result<String, String>{
    API::update_entry_password(fingerprint, uuid, password)
}


#[tauri::command]
fn update_entry_url(fingerprint: &str, uuid: &str, url: &str) -> Result<String, String>{
    API::update_entry_url(fingerprint, uuid, url)
}

#[tauri::command]
fn update_entry_user_name(fingerprint: &str, uuid: &str, user_name: &str) -> Result<String, String>{
    API::update_entry_user_name(fingerprint, uuid, user_name)
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
        .invoke_handler(tauri::generate_handler![
            greet, create_secret, get_public_key, login, get_all_users_from_keystore,
            init_local_passmate, add_new_password_entry, get_all_entries,
            update_entry_password, update_entry_url, update_entry_user_name
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
