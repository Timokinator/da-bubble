import { User } from "./user.class";
import { Message } from "./message.class";


export class Channel {
    [x: string]: any;
    id!: string;
    name!: string;
    description!: string;
    users!: User[];
    




}