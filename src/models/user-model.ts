export class UserModel {
    public id?: number;
    public username: string;
    public normalizedUsername: string;
    public key: string;

    constructor(username: string, normalizedUsername: string, key: string) {
        this.username = username;
        this.normalizedUsername = normalizedUsername;
        this.key = key;
    }
}