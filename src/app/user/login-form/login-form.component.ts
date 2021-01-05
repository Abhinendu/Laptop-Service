import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styles: [
  ]
})
export class LoginFormComponent implements OnInit {

  constructor(private toastr:ToastrService,
              public service:UserService,
              private router: Router) { }
  userName:string;
  password:string;

  ngOnInit(): void {
  }

  onSubmit(form: NgForm)
  {

    this.service.login(form.value).subscribe(
      res=>
      {
        form.reset();
        this.toastr.success('Welcome..');
        this.router.navigate(['app-ticket']);
      },
      err=>{
          form.reset();
          console.log(err);
          this.toastr.error('Invalid credential')
      }
    )

  }

}
