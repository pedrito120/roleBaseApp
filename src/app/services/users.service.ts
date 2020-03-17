import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private fireDataBase:AngularFireDatabase) { }

  public addUser(user:any){
    return this.fireDataBase.database.ref("/user").push(user);
  }
}
