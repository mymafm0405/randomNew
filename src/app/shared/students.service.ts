import { Student } from './student.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  students: Student[] = [
    new Student('1', '1', 'Mahmoud', '../../assets/images/1.jpg'),
  ];

  foundStudent: Student;

  selectedStudentsBefore: Student[] = [];

  constructor() {}

  getStudents() {
    return this.students;
  }

  getRandomStudentForGroup(groupId: string): Student | undefined {
    this.selectedStudentsBefore.forEach((student) => {
      this.foundStudent = this.students.find(
        (stu) => stu.groupId === groupId && stu.id !== student.id
      );
      if (this.foundStudent) {
        this.selectedStudentsBefore.push(this.foundStudent);
      }
    });
    return this.foundStudent;
  }
}
