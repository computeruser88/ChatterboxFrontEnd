import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { GroupService } from '../../services/group/group.service';
import { Group } from '../../group';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  groups: Group[] = [];

  constructor(private auth: AuthService, private group: GroupService) { 
  }

  ngOnInit() {
    this
    .group
    .getGroups()
    .subscribe((data) => {
      this.groups = data;
      console.log(this.groups);
  });
  }

}
