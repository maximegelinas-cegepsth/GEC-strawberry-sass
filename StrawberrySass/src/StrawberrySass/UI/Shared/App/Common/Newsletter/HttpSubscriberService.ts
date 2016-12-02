import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../Core';

import { Subscriber } from './Subscriber';
import { SubscriberService } from './SubscriberService';

@Injectable()
export class HttpSubscriberService extends HttpService<Subscriber> implements SubscriberService {

    constructor(http: Http) {
        super(http);
    }

    apiUrl(): string { return '/api/newsletter/subscribers'; }

}