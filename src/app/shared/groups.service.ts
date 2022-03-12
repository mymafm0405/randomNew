import { Group } from './group.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  groupIdChanged = new Subject<string>();

  groups: Group[] = [
    new Group('1', '', '../../assets/images/green.png', 1),
    new Group('2', '', '../../assets/images/yellow.png', 1),
    new Group('3', '', '../../assets/images/red.png', 1),
  ];
  constructor() {}

  getGroups() {
    return this.groups;
  }
}
