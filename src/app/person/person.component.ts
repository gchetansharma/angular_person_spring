import {Component, OnInit} from '@angular/core';
import {Person} from './person';
import { PersonService } from './person.service';

@Component ({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
    persons: Person[];
    constructor(private _personService: PersonService) {}

    ngOnInit(): void {
        this.getPersons();
    }

    getPersons(): void {
        this._personService.getAllPersons()
            .subscribe((personData) => {
                this.persons = personData, console.log(personData);
            }, (error) => {
                console.log(error);
            });
    }

}


