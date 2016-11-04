import { Comment } from './Comment';
import { Member } from './Member';

export class Subject {

    title: string;

    description: string;

    content: string;

    addedDate: Date;

    author: Member;

    comments: Comment[];

}