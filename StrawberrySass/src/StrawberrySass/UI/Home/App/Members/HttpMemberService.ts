import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../../Shared/App/Core';

import { Member } from './Member';
import { MemberService } from './MemberService';

@Injectable()
export class HttpMemberService extends HttpService<Member> implements MemberService {

    constructor(http: Http) {
        super(http);
    }

    apiUrl(): string { return '/api/members'; }

}