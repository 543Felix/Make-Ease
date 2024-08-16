export interface userInterface{
    _id:string;
    name:string;
    email:string;
    password:string;
    role:'user'|'admin',
    isBlocked:boolean
}