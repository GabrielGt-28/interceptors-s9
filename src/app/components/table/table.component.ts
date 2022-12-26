import { Component, Input } from '@angular/core';

interface People {
  id: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() peoplesChildren?: Array<People> = [];

  show() {
    console.log(this.peoplesChildren);
  }
}
