export interface taskInterface{
    _id:string;
    title:string;
    user:string;
    isCompleted:boolean;
    priority:'low'|'medium'|'high';
    dueDate:Date
}