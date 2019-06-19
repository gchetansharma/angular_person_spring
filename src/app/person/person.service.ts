import { Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Person } from './person';
import { map } from 'rxjs/operators';
import { catchError  } from 'rxjs/operators';

@Injectable()
export class PersonService {
    constructor(private _httpService: Http) {}

    getAllPersons(): Observable<Person[]> {
        return this._httpService.get('http://localhost:8080/getAll')
            .pipe(map((response: Response) => response.json()))
            .pipe(catchError (this.handleError));
    }
    private handleError(error: Response) {
        return Observable.throw(error);
    }

}
