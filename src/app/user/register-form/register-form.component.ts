import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styles: [
  ]
})
export class RegisterFormComponent implements OnInit {

  constructor(public service:UserService,
              private toastr:ToastrService,
              private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
     this.addUser(form);
     this.router.navigate(['']);
  }
  addUser(form:NgForm)
{
  this.service.postUser().subscribe(
    res=>{
          this.resetForm(form);
          this.toastr.success('Account Created successfully','User Register')
    },
    err => {
      this.resetForm(form);
      this.toastr.error("Sorry, unable to register","User Register")
    }
  );
}

resetForm(form:NgForm)
{
  form.form.reset();
  this.service.userData = new User();
}
}
