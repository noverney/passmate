import {invoke} from "@tauri-apps/api/tauri";

class DevApi {
    static async create_secret(): Promise<string>{
        return Promise.resolve("23910234120934820387893527435");
    };

    static async login(): Promise<string>{
        return Promise.resolve("C9951059A55E31549969486DEB2500C2918FDBF8");
    };

    static async get_all_users_from_keystore(): Promise<{figerprint: string, userId: string}[]>{
        return Promise.resolve([{figerprint: "23910234120934820387893527435", userId: "BaselHack2022 <info@basel.hack>"}]);
    };

    static async init_local_passmate(deviceName: string, fingerprint: string): Promise<void>{
        return Promise.resolve();
    };

    static async  get_all_entries(args: {fingerprint: string}): Promise<{password: string, url: string, userName: string, uuid: string}[]>{
        return Promise.resolve([{password: "23910234120934820387893527435", url: "https://basel.hack", userName: "BaselHack2022", uuid: "23910234120934820387893527435"}]);
    };
    static async sync(remoteurl: string, fingerprint: string): Promise<void>{
        return Promise.resolve();
    };

}


class Api {
    static async create_secret(): Promise<string>{
        return invoke("create_secret");
    };

    static async get_public_key(fingerprint: string): Promise<string>{
        return invoke("get_public_key", {fingerprint: fingerprint});
    };

    static async login(fingerprint: string): Promise<string>{
        return invoke("login", {fingerprint: fingerprint});
    };

    static async get_all_users_from_keystore(): Promise<string>{
        return invoke("get_all_users_from_keystore");
    };

    static async init_local_passmate(deviceName: string, fingerprint: string): Promise<void>{
        return invoke("init_local_passmate", {deviceName: deviceName, fingerprint: fingerprint});
    };

    static async  add_new_password_entry(args: {fingerprint: string, userName: string, password: string, url: string}): Promise<void>{
        return invoke("add_new_password_entry", args);
    };

    static async  get_all_entries(args: {fingerprint: string}): Promise<string>{
        return invoke("get_all_entries", args);
    };

    static async sync(remoteUrl: string, fingerprint: string): Promise<void>{
        return invoke("sync", {remoteurl: remoteUrl, fingerprint: fingerprint});
    };

    static async update_entry_password(fingerprint: string, uuid: string, password: string): Promise<void>{
        return invoke("update_entry_password", {fingerprint, uuid, password });
    };

}

// export default DevApi;
export default Api;
