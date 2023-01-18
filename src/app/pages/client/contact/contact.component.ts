import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private snack:MatSnackBar){}
  message:string = '';
  onSend(){
    this.message = "Query is sends to our support team!!";
    this.snack.open(this.message,'Close',{
      duration:5000,
    });
  }
}
