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
