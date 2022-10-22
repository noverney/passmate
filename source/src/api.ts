import {invoke} from "@tauri-apps/api/tauri";

class DevApi {
    static async create_secret(): Promise<string>{
        return Promise.resolve("23910234120934820387893527435");
    };

    static async login(): Promise<string>{
        return Promise.resolve("23910234120934820387893527435");
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
}

// export default DevApi;
export default Api;
