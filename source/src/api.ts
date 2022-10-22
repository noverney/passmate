import {invoke} from "@tauri-apps/api/tauri";

class DevApi {
    static async create_secret(): Promise<string>{
        return Promise.resolve("23910234120934820387893527435");
    };
}


class Api {
    static async create_secret(): Promise<string>{
        return invoke("create_secret");
    };
}

export default DevApi;
// export default Api;
