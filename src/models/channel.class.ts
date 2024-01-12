import { User } from "./user.class";
import { Post } from "./post.class";


export class Channel {
    [x: string]: any;
    id!: string;
    name!: string;
    description!: string;
    users!: User[];
    posts!: Post[];


    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.name = obj ? obj.id : '';
        this.description = obj ? obj.description : '';
        this.users = obj ? obj.users : [];
        this.posts = obj ? obj.posts : [];

    }






}