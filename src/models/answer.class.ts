import { Post } from "./post.class";
import { User } from "./user.class";


export class Answer {

    [x: string]: any;
    id!: string;
    content!: string;
    user!: User;
    post!: Post;
    date!: string;
    time!: string;




    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.content = obj ? obj.content : '';
        this.user = obj ? obj.user : '';
        this.post = obj ? obj.post : '';
        this.date = obj ? obj.date : '';
        this.time = obj ? obj.time : '';

    }





}