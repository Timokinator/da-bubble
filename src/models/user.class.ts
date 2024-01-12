



export class User {
    [x: string]: any;
    id!: number;
    name!: string;
    photoURL!: string;
    channels: string[] = [];



    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.name = obj ? obj.name : '';
        this.photoURL = obj ? obj.photoURL : '';
        this.channels = obj ? obj.chats : [];


    }

}