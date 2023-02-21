import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.scss']
})
export class PostsTableComponent implements OnInit {

  public postsList: any;
  
  constructor(private _api: ApiService) {
    this._api.getPosts().subscribe((response: any) => {
      this.postsList = response;
    })
  }

  ngOnInit(): void {
  }

}
