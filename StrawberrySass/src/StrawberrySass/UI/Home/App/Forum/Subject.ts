import { Comment } from './Comment';
import { Member } from './Member';

export class Subject {

    id: number;

    title: string;

    description: string;

    content: string;

    addedDate: Date;

    author: Member;

    comments: Comment[];

    lastComment: Comment;

    commentCount: number;

}