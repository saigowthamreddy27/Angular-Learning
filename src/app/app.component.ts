import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
import { TasksComponent } from './tasks/tasks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users=DUMMY_USERS
  selectedUserName? : string;
  selectedUserId?: string;
onSelectedUsers(id:string){
  console.log(`SelectedUsers ID is ${id}`);
  const user=this.users.find(user=>user.id===id)
  if (user){
    console.log(user.name)
    this.selectedUserName=user.name
    this.selectedUserId=user.id
  }
}

}
