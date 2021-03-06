import { Component, OnInit } from '@angular/core';
import { List, UserPreview, UserFull } from './model/user.model';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userpreview:UserPreview[]=[];
  User!:UserPreview;
  books: any = [];
  count=0

constructor(private userService:UsersService){}
  ngOnInit(): void {
this.getUsers();
  }
  public getUsers():void {
    this.userService.getUsers().subscribe(response => {this.userpreview=response.data; console.log(response);
        // const keys = response.headers.keys();
        // keys.forEach(key => console.log(`${key}: ${response.headers.get(key)}`));
    });
}
  createUser():void{
    this.userService.createUser({firstName:`Aya ${this.count}` ,lastName:`Jalal ${this.count}` ,email:`aya22@gmail.com`}).subscribe(response=>this.getUsers(),
    err=>console.log("error ocuured",err)


    );
    this.count++;
  }

  editUser(user:UserPreview){
    const updateuser={
...user,
firstName:"Ahmad",
lastName:"ismeal",
    };
    this.userService.editAccount(updateuser.id,updateuser).subscribe(user=>{this.getUsers();})

  }
  deleteUser(id:string){
     this.userService.deleteAccount(id).subscribe(Response=>{console.log(Response);this.getUsers();})
  }

getUserById(id:string){
  this.userService.getUserById(id).subscribe(Response=>{console.log(Response);})

}
}
