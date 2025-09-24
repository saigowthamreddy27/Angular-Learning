import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
} from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { NgFor } from '@angular/common';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
// export class UserComponent {
// selectedUser = signal(DUMMY_USERS[randomIndex])
// get imagePath(){
//   return 'assets/users/'+ this.selectedUser.avatar
// }

// imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

// onselectedUser(){
//   console.log("clicked");
//   const randomIndex=Math.floor(Math.random() * DUMMY_USERS.length);
//   //this.selectedUser= DUMMY_USERS[randomIndex];

//   this.selectedUser.set(DUMMY_USERS[randomIndex]);

// }
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter();
  //  avatar =input.required<string>;
  //  name =input.required<string>;

  // imagePath=computed(()=>'asserts/users' this.avatar() when we are using signal we must use ()

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectedUsers() {
    this.select.emit(this.id);
  }
}
