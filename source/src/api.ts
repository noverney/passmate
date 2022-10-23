//import {invoke} from "@tauri-apps/api/tauri";

export interface LoginUser { figerprint: string, userId: string }
export interface PasswordBackend {
    userName: string,
    password: string,
    url:string,
    id: string,
}



class DevApi {
    static passwordList: PasswordBackend[] = [{
        id: "someId",
        userName: "BaselHack",
        password: "We are cheating",
        url: "Bernhack.hack.com"
    }, {
        id: "anotherid",
        password: "args.password",
        url: "args.url",
        userName: "args.userName"
    }]

    static async getSecrets(fingerprint: string): Promise<PasswordBackend[]> {
        return Promise.resolve(DevApi.passwordList);
    };

    static async create_secret(): Promise<string> {
        return Promise.resolve("23910234120934820387893527435");
    };

    static async login(fingerprint: string): Promise<string> {
        return Promise.resolve("23910234120934820387893527435");
    };

    static async get_all_users_from_keystore(): Promise<LoginUser[]> {
        return Promise.resolve([{ figerprint: "23910234120934820387893527436", userId: "BaselHack2022 <info@basel.hack>" }, { figerprint: "23910234120934820387893527437", userId: "Joel <info@basel.hack>" }, { figerprint: "23910234120934820387893527435", userId: "David <info@basel.hack>" }]);
    };

    static async init_local_passmate(deviceName: string, fingerprint: string): Promise<void>{
        return Promise.resolve();
    };

    static async  add_new_password_entry(args: {fingerprint: string, userName: string, password: string, url: string}): Promise<void>{
        return Promise.resolve();
    };
}



export default DevApi;
//export default Api;