import { Observable } from 'rxjs/Observable';

import { Account } from './Account';

export abstract class AccountService {

    abstract login(account: Account): Observable<Account>;

    abstract register(account: Account): Observable<Account>;

}