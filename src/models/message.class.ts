
import { User } from "./user.class";


export class Message {
    [x: string]: any;
    id!: number;
    text!: string;
    channel!: string ;
    user!: User;



    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.text = obj ? obj.name : '';
        this.channel = obj ? obj.channel : '';
        this.user = obj ? obj.user : '';

    }

}

