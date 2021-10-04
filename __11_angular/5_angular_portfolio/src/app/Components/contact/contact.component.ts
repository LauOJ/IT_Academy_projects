import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Meta, MetaDefinition } from '@angular/platform-browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
  
  contactForm!: FormGroup;
  submitted = false;
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void { 
    this.contactForm = this.fb.group({
      name: this.fb.control('', [
          Validators.required
      ]),
      email: this.fb.control('', [
        Validators.required,
        Validators.email
    ]),
      phoneNumber: this.fb.control('', [
        Validators.required,
        Validators.pattern('^[0-9]{7,12}$')
    ]),
      message: this.fb.control('', [
        Validators.required
    ])
    });
  }

  get getform() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.contactForm.valid) {
      return;
    }
    console.log(JSON.stringify(this.contactForm.value));
  }

  public control(name:string){
    return this.contactForm.get(name);
  }

}














// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';


// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.scss']
// })
// export class ContactComponent implements OnInit {
  
//   contactForm!: FormGroup;
  
//   constructor(private fb: FormBuilder) { }

//   ngOnInit(){
//     this.contactForm = this.fb.group({
//       name: ['', [
//           Validators.required
//       ]],
//       email: ['', [
//         Validators.required,
//         Validators.email
//     ]],
//       phoneNumber: ['', [
//         Validators.required,
//         Validators.pattern('^[0-9]*$')
//     ]],
//       message: ['', [
//         Validators.required
//     ]]
//     });
//   }

//   get name(){
//     return this.contactForm.get('name');
//   }

//   get email(){
//     return this.contactForm.get('email');
//   }

//   get phoneNumber(){
//     return this.contactForm.get('phoneNumber');
//   }

//   get message(){
//     return this.contactForm.get('message');
//   }

// }
