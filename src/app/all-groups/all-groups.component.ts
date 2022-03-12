import { Group } from './../shared/group.model';
import { GroupsService } from './../shared/groups.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-groups',
  templateUrl: './all-groups.component.html',
  styleUrls: ['./all-groups.component.css'],
})
export class AllGroupsComponent implements OnInit {
  allGroups: Group[] | undefined;
  constructor(private groupsService: GroupsService) {}

  ngOnInit(): void {
    this.getAllGroups();
  }

  getAllGroups() {
    this.allGroups = this.groupsService.getGroups();
  }
}
