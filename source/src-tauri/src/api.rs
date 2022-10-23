use dcore::gpg::Gpg;

pub struct API {

}

#[derive(Debug , serde::Serialize)]
pub struct User {
    #[allow(dead_code)]
    fingerprint: String,
    #[allow(dead_code)]
    userId: String,
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
