import { GroupsService } from './../shared/groups.service';
import { StudentsService } from './../shared/students.service';
import { Student } from './../shared/student.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css'],
})
export class AllStudentsComponent implements OnInit {
  allStudent!: Student[];
  currentStudent!: Student;
  currentGroupId!: string;

  constructor(
    private studentsService: StudentsService,
    private groupsService: GroupsService
  ) {}

  ngOnInit(): void {
    this.groupsService.groupIdChanged.subscribe((id: string) => {
      this.currentGroupId = id;
    });
  }

  getAllStudents() {
    this.allStudent = this.studentsService.getStudents();
  }

  getCurrentStudent() {
    this.currentStudent = this.studentsService.getRandomStudentForGroup(
      this.currentGroupId
    );
  }
}
