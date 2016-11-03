import { EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { User } from './User';

export abstract class AccountService {

    logged: EventEmitter<User>;

    abstract login(user: User): Observable<User>;

    abstract register(user: User): Observable<User>;

}