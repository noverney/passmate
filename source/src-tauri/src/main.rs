#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use dcore::gpg::{CreateUserArgs, Gpg};
use dcore::Identity;
use dcore::identity::GetIdentityArgs;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn create_secret() -> String {
    let mut gpg = Gpg::new_with_custom_home("./.test/identity/get_identity/gpghome");
    let key = gpg
        .create_key(CreateUserArgs {
            email: "alice@colomba.link",
            name: "Alice",
        })
        .expect("create key");
    key.fingerprint.clone()
}


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, create_secret])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
