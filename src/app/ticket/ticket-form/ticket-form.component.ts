import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ticket } from 'src/app/shared/ticket.model';
import { TicketService } from 'src/app/shared/ticket.service';


@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styles: [
  ]
})
export class TicketFormComponent implements OnInit {

  constructor(public service:TicketService , private toastr: ToastrService, private router: Router) { }
  data:any = localStorage.getItem("key");
  user = JSON.parse(this.data)
  ngOnInit(): void {
  }

  onSubmit(form: NgForm)
{
    if(this.service.formData.ticketId===0)
    {
      this.service.formData.userId=this.user.userId;
      this.insertTicket(form);

    }
    else
      this.updateTicket(form);
   this.router.navigate(['app-ticket']);
}

insertTicket(form:NgForm)
{
  this.service.postTicket().subscribe(
    res=>{
          this.resetForm(form);
          this.service.refreshList();
          this.toastr.success('Ticket Created successfully','Ticket Register')
    },
    err => {console.log(err);}
  );
}

updateTicket(form:NgForm)
{
  this.service.putTicket().subscribe(
    res=>{
          this.resetForm(form);
          this.service.refreshList();
          this.toastr.info('Ticket updated successfully','Ticket Register')
    },
    err => {console.log(err);}
  );
}
resetForm(form:NgForm)
{
  form.form.reset();
  this.service.formData = new Ticket();
}

cancel(form:NgForm)
{
  this.resetForm(form)
  this.router.navigate(['app-ticket']);
}

}
