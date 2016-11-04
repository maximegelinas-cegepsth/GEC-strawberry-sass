import { Observable } from 'rxjs/Observable';

import { DataService } from '../../../Shared/App/Core';

import { Member } from './Member';

export abstract class MemberService implements DataService<Member> {

    abstract add(data: Member): Observable<Member>;

    abstract delete(key: string): Observable<boolean>;

    abstract get(key: string): Observable<Member>;

    abstract getAll(): Observable<Member[]>;

    abstract update(data: Member): Observable<Member>;

}