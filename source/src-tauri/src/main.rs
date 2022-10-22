#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use dcore::gpg::{CreateUserArgs, Gpg};
use dcore::Identity;
use dcore::identity::GetIdentityArgs;

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
    let mut gpg = Gpg::new_with_custom_home(get_gpg_home().as_str());
    let key = gpg
        .create_key(CreateUserArgs {
            email: "alice@colomba.link",
            name: "Alice",
        });
    match key {
        Ok(key) => key.fingerprint,
        Err(err) => err.to_string(),
    }
}


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, create_secret])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
