import { Observable } from 'rxjs/Observable';

import { DataService } from '../../../Shared/App/Core';

import { Subscriber } from './Subscriber';

export abstract class SubscriberService implements DataService<Subscriber> {

    abstract add(data: Subscriber): Observable<Subscriber>;

    abstract delete(key: string): Observable<boolean>;

    abstract get(key: string): Observable<Subscriber>;

    abstract getAll(): Observable<Subscriber[]>;

    abstract update(data: Subscriber): Observable<Subscriber>;

}