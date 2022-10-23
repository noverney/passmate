//import {invoke} from "@tauri-apps/api/tauri";

export interface LoginUser { figerprint: string, userId: string }

class DevApi {
    static async create_secret(): Promise<string> {
        return Promise.resolve("23910234120934820387893527435");
    };

    static async login(): Promise<string> {
        return Promise.resolve("23910234120934820387893527435");
    };

    static async get_all_users_from_keystore(): Promise<LoginUser[]> {
        return Promise.resolve([{ figerprint: "23910234120934820387893527436", userId: "BaselHack2022 <info@basel.hack>" }, { figerprint: "23910234120934820387893527437", userId: "Joel <info@basel.hack>" }, { figerprint: "23910234120934820387893527435", userId: "David <info@basel.hack>" }]);
    };
}


// class Api {
//     static async create_secret(): Promise<string>{
//         return invoke("create_secret");
//     };
//
//     static async get_public_key(fingerprint: string): Promise<string>{
//         return invoke("get_public_key", {fingerprint: fingerprint});
//     };
//
//     static async login(fingerprint: string): Promise<string>{
//         return invoke("login", {fingerprint: fingerprint});
//     };
//
//     static async get_all_users_from_keystore(): Promise<string>{
//         return invoke("get_all_users_from_keystore");
//     };
//
// }

export default DevApi;
//export default Api;