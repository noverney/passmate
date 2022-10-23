use std::path::PathBuf;
use dcore::{Document, Identity};
use dcore::document::DocumentNewOptions;
use dcore::gpg::Gpg;
use dcore::resource::Resource;

pub struct API {

}

#[derive(Debug , serde::Serialize)]
pub struct User {
    #[allow(dead_code)]
    fingerprint: String,
    #[allow(dead_code)]
    userId: String,
}


#[derive(Debug , serde::Serialize)]
pub struct PasswordEntry {
    #[allow(dead_code)]
    user_name: String,
    #[allow(dead_code)]
    password: String,
    #[allow(dead_code)]
    url: String,
}

impl API {

    pub fn get_all_users_from_keystore() -> Result<Vec<User>, String>{
        let mut gpg = Gpg::new();
        let keys = gpg.context.keys().unwrap();
        let mut users = Vec::new();

        for key in keys {
            let user = match key {
                Ok(key) => {
                    let fingerprint = match key.fingerprint() {
                        Ok(fingerprint) => fingerprint.to_string(),
                        Err(err) => "".to_string(),
                    };
                    let userId = match key.user_ids().next() {
                        Some(userId) => userId.to_string(),
                        None => "".to_string(),
                    };

                    Some(User {
                        fingerprint,
                        userId,
                    })
                },
                Err(err) => None
            };
            if let Some(user) = user {
                users.push(user);
            }
        }
        Ok(users)
    }

    pub fn init_local_passmate(device_name: &str, fingerprint: &str) -> Result<(), String>{
        let dir = "./passmate";
        let path = PathBuf::from(dir);
        println!("init_local_passmate: {}", path.display());
        let doc = Document::new(DocumentNewOptions {
            directory: PathBuf::from(dir),
            identity_fingerprint: fingerprint.to_string(),
            name: String::from("passmate"),
        }).unwrap();

        let mut gpg = Gpg::new();

       let key =  gpg.get_public_key(&fingerprint);
        if key.is_err() {
            return  match key {
                Err(err) => Err(err.to_string()),
                _ => Err("".to_string()),
            }
        };
        let key = key.unwrap();

        let identity = Identity::from_key(key);

        let publicKey = identity.get_armored_public_key();
        if publicKey.is_err() {
            return  match publicKey {
                Err(err) => Err(err.to_string()),
                _ => Err("".to_string()),
            }
        };

        let publicKey = publicKey.unwrap();

        let doc = doc
            .init(&fingerprint.to_string(), &publicKey);

        if doc.is_err() {
            return match doc {
                Err(err) => Err(err.to_string()),
                _ => Err("".to_string()),
            }
        };

        let resource = Resource::new(&String::from("passwords"));
        Ok(())
    }

    pub fn clone_passmate(remote_url: &str) -> Result<(), String>{

        Ok(())
    }


    pub fn add_new_password_entry() -> Result<(), String>{
        Ok(())
    }


    pub fn sync() -> Result<(), String>{
        Ok(())
    }

}


#[cfg(test)]
mod test {
    use dcore::gpg::Gpg;
    use crate::API;

    #[test]
    fn test_get_all_users_from_keystore() {
        let users = API::get_all_users_from_keystore();
    }


}
