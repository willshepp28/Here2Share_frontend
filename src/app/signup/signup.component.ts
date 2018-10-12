import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PasswordValidation } from "../core/helper/password-validation";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // .createTable("users", (table) => {
  //   table.increments();
  //   table.string("username").notNullable();
  //   table.string("profilePic").notNullable().defaultTo("https://s3.us-east-2.amazonaws.com/ig-clone2019/profilePic/profileplaceholder.png");
  //   table.string("email").notNullable();
  //   table.text("password").notNullable();
  //   table.text("phone_number").notNullable();
  //   table.timestamp('date_joined').defaultTo(knex.fn.now());
  // })
  // .createTable("address", (table) => {
  //   table.increments();
  //   table.string("street").notNullable();
  //   table.string("city").notNullable();
  //   table.string("state").notNullable();
  //   table.string("zipcode").notNullable();
  //   table.integer("userId").unsigned().references("id").inTable("users");
  // }) 

  signupForm: FormGroup;
  submitted = false;


  constructor(   private formBuilder: FormBuilder) {
   
    
   }

  ngOnInit() {

    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', [Validators.required,Validators.minLength(2)]],
      zipcode: ['', [Validators.required,  Validators.minLength(5)]],
        
  },
  {
    validator: PasswordValidation.MatchPassword 
  }
);
  }

     // convenience getter for easy access to form fields
     get getFormControls() { return this.signupForm.controls; }

     onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.signupForm.invalid) {
          return;
      }

      console.log(this.signupForm.value);

      
  }

}
