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
    person = new Person() ;
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

    addPerson(): void {
      this._personService.addPerson(this.person)
          .subscribe((respnse) => {console.log(respnse)}, (error) => {
            console.log(error);
          });
    }

}


