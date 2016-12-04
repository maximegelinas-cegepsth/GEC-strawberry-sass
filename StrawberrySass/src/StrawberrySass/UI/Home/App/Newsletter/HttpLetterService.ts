import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../../Shared/App/Core';

import { Letter } from './Letter';
import { LetterService } from './LetterService';

@Injectable()
export class HttpLetterService extends HttpService<Letter> implements LetterService {

    constructor(http: Http) {
        super(http);
    }

    apiUrl(): string { return '/api/newsletter/letters'; }

}