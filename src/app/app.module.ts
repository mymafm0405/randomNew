import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GroupComponent } from './group/group.component';
import { AllGroupsComponent } from './all-groups/all-groups.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    AllGroupsComponent,
    AllStudentsComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
