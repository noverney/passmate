# Tauri + Next.js + Typescript

This template should help get you started developing with Tauri, Next.js and Typescript.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)


## Yubikey

```bash

$ gpg --edit-key D899C824B16A3EDEAA67C4402962E1B2176EF74C
gpg (GnuPG) 2.2.19; Copyright (C) 2019 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Secret key is available.

sec  ed25519/2962E1B2176EF74C
     created: 2022-10-22  expires: never       usage: SC  
     trust: ultimate      validity: ultimate
[ultimate] (1). BaselHack2022 <info@colomba.link>

gpg> toggle

sec  ed25519/2962E1B2176EF74C
     created: 2022-10-22  expires: never       usage: SC  
     trust: ultimate      validity: ultimate
[ultimate] (1). BaselHack2022 <info@colomba.link>

gpg> key
key        keyserver  keytocard  
gpg> keytocard 
Really move the primary key? (y/N) y
Please select where to store the key:
   (1) Signature key
   (3) Authentication key
Your selection? 1

gpg: WARNING: such a key has already been stored on the card!

Replace existing key? (y/N) y

sec  ed25519/2962E1B2176EF74C
     created: 2022-10-22  expires: never       usage: SC  
     trust: ultimate      validity: ultimate
[ultimate] (1). BaselHack2022 <info@colomba.link>

gpg> keytocard 
Really move the primary key? (y/N) y
Please select where to store the key:
   (1) Signature key
   (3) Authentication key
Your selection? 3

gpg: WARNING: such a key has already been stored on the card!

Replace existing key? (y/N) y

sec  ed25519/2962E1B2176EF74C
     created: 2022-10-22  expires: never       usage: SC  
     trust: ultimate      validity: ultimate
[ultimate] (1). BaselHack2022 <info@colomba.link>

gpg> 

```


# Prototype 1 

## Workflow 

1. Wait for user login 
   2. The user needs to click the login button and ensure that the yubikey is connected
   3. The login process will then authenticate the users by a encryption challenge
      1. Successful login will then trigger the next step 2.
      2. Failed login will then trigger a error message
      3. User timeout will then trigger a error message
2. Try to show the user the list of all passwords
   1. If keystore does not exist, create a new keystore
      2. Show the create new keystore dialog: ask for device name
   2. If keystore exists, load the keystore
      1. Load the keystore go to step 3 
3. Manage Passwords 
    1. Clone from a repo  
    2. CRUD operations on passwords
    3. Sync with remote 
