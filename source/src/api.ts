//import {invoke} from "@tauri-apps/api/tauri";

class DevApi {
    static async create_secret(): Promise<string>{
        return Promise.resolve("23910234120934820387893527435");
    };

    static async login(): Promise<string>{
        return Promise.resolve("23910234120934820387893527435");
    };

    static async get_all_users_from_keystore(): Promise<{figerprint: string, userId: string}[]>{
        return Promise.resolve([{figerprint: "23910234120934820387893527435", userId: "BaselHack2022 <info@basel.hack>"}]);
    };

    static async init_local_passmate(deviceName: string, fingerprint: string): Promise<void>{
        return Promise.resolve();
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
//     static async init_local_passmate(deviceName: string, fingerprint: string): Promise<void>{
//         return invoke("init_local_passmate", {deviceName: deviceName, fingerprint: fingerprint});
//     };
//
// }

export default DevApi;
//export default Api;