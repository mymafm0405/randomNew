import { Group } from './../shared/group.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
})
export class GroupComponent implements OnInit {
  @Input() group!: Group;

  constructor() {}

  ngOnInit(): void {}
}
