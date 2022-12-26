import { Component } from '@angular/core';
import { PeopleListService } from './services/people-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'interceptors-s9';

  peoples: Array<any> = [];

  constructor(private peopleListService: PeopleListService) {
    this.peopleListService.getPeopleList().subscribe((resp: any) => {
      console.log(resp);
      this.peoples = resp;
    });
  }
}
