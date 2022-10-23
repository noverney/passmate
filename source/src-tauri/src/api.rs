use std::path::PathBuf;
use dcore::{Document, Identity};
use dcore::document::DocumentNewOptions;
use dcore::gpg::Gpg;
use dcore::resource::Resource;
use lib0::any::Any;
use uuid::Uuid;

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

        let resource = doc.unwrap().add_resource("passwords".to_string());
        if resource.is_err() {
            return match resource {
                Err(err) => Err(err.to_string()),
                _ => Err("".to_string()),
            }
        };
        Ok(())
    }

    pub fn clone_passmate(remote_url: &str) -> Result<(), String>{

        Ok(())
    }


    pub fn add_new_password_entry(fingerprint: &str, user_name: &str, password: &str, url: &str) -> Result<String, String>{
        let dir = "./passmate";
        let path = PathBuf::from(dir);
        let mut doc = Document::new(DocumentNewOptions {
            directory: PathBuf::from(dir),
            identity_fingerprint: fingerprint.to_string(),
            name: String::from("passmate"),
        }).unwrap();

        let ready_doc = doc.load();
        if ready_doc.is_err() {
            return match ready_doc {
                Err(err) => Err(err.to_string()),
                _ => Err("".to_string()),
            }
        };

        let resource = doc.resources.get("passwords");
        if resource.is_none() {
            return Err("The passwords resource does not exist.".to_string());
        }


        let id = Uuid::new_v4().to_string();
       // user_name: user_name.to_string(),
        //password: password.to_string(),
        //url: url.to_string(),

        let key = format!("{}.userName", id);
        doc.update_resource_with_key_value("passwords", key.as_str(), user_name);

        let key = format!("{}.password", id);
        doc.update_resource_with_key_value("passwords", key.as_str(), password);

        let key = format!("{}.url", id);
        doc.update_resource_with_key_value("passwords", key.as_str(), url);
        Ok(id)

    }


    pub fn get_all_entries(fingerprint: &str) -> Result<String, String>{
        let dir = "./passmate";
        let path = PathBuf::from(dir);
        let mut doc = Document::new(DocumentNewOptions {
            directory: PathBuf::from(dir),
            identity_fingerprint: fingerprint.to_string(),
            name: String::from("passmate"),
        }).unwrap();

        let ready_doc = doc.load();
        if ready_doc.is_err() {
            return match ready_doc {
                Err(err) => Err(err.to_string()),
                _ => Err("".to_string()),
            }
        };

        let resource = doc.resources.get("passwords");
        if resource.is_none() {
            return Err("The passwords resource does not exist.".to_string());
        }
        Ok(resource.unwrap().get_content())
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
