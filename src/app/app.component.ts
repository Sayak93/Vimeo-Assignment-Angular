import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title: string;
  public buttonColor: string;
  public colorChangerForm: FormGroup;
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    /*########### Form ###########*/
    this.colorChangerForm = this.fb.group({
      color: ['blue', [Validators.required]]
    });

    this.title = 'sayak-chatterjee-may292021';
    this.buttonColor = 'blue';
  }

  // Getter method to access form control
  get myForm() {
    return this.colorChangerForm.get('gender');
  }

  //on selecting a different color
  changeColor(){
    if(this.colorChangerForm.valid){
      this.buttonColor = this.colorChangerForm.value.color;
    }
    console.log(this.buttonColor);
    
  }

}
