import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  public usersList: any;
  
  constructor(private _api: ApiService) {
    this._api.getUsers().subscribe((response: any) => {
      this.usersList = response;
    })
  }

  ngOnInit(): void {
  }

}
