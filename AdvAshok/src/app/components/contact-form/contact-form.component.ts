import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule,FormsModule, FormControl, AbstractControl} from '@angular/forms';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss','../../../styles.scss']
})
export class ContactFormComponent {
    contactForm:FormGroup;
    submitted=false;
    constructor(){
      this.contactForm=new FormGroup({
        firstName:new FormControl("",Validators.required),
        lastName:new FormControl("",Validators.required),
        emailAddr:new FormControl("",[Validators.required ,Validators.email]),
        phoneNum:new FormControl("",[Validators.required,Validators.minLength(12)]),
        message:new FormControl("",Validators.required),
        agreePolicy:new FormControl(false,Validators.required),
      })
    }
 
    
    getFormControlClasses(control: AbstractControl): string {
      const isTouched = control.touched;
      const isDirty = control.dirty;
      const hasErrors = control.errors;
    
      if (isTouched && hasErrors) {
        return 'is-invalid';
      } else if ((isTouched || isDirty) && !hasErrors) {
        return 'is-valid';
      } else {
        return ''; // No additional classes
      }
    }
    async onSubmit(){
      this.submitted=this.contactForm.valid;
      if(this.contactForm.invalid){
        return
      }
      emailjs.init('A0sbA7DcZq1LJ3pTn');
      let response = await emailjs.send('service_otjw5am', 'template_5hetu9r',{
        from_name: this.contactForm.value.firstName + " " + this.contactForm.value.lastName,
        to_name: 'AdvAshok',
        from_email: this.contactForm.value.emailAddr,
        from_phone:this.contactForm.value.phoneNum,
        message: this.contactForm.value.message
        })
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
              },
              (err) => {
              console.log('FAILED...', err);
              },);
              this.contactForm.reset();
              Swal.fire({
                title: "Message Sent",
                text: "AdvAshok will reach out to you soon",
                icon: "info"
              });
    }
}
