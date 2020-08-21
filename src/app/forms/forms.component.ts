import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
formDetails:FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.detailsForm()
  }

submitForm(details){
console.log(details)
}





 private detailsForm(){
 this.formDetails = this.fb.group({
   firstName: [''],
   lastName: [''],
   otherName: [''],
   dateOfBirth: [''],
   image: [''],
   phoneNumber:[''],
   email: [''],
   aboutYou: [''],
   skills: ['']
 })
 }

}
