import { Component, OnInit } from '@angular/core';

export class formulaire {
  public email: string='';
  public message: string='';
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
model= new formulaire();
  constructor() { }

  ngOnInit(): void {
  }
  displayStyle = "none";
  submit(){
    this.displayStyle = "block";
 }
 closeModal() {
   this.displayStyle = "none";
 }
}
