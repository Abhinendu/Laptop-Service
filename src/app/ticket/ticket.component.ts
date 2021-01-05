import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ticket } from '../shared/ticket.model';
import { TicketService } from '../shared/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styles: [
  ]
})
export class TicketComponent implements OnInit {

  public Id:number;
  constructor(public service:TicketService, private toastr:ToastrService, private router:Router,
               public actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

populateForm(selectedTicket:Ticket)
{
  this.service.formData=Object.assign({},selectedTicket);
}

onDelete(Id: number)
{
  if(confirm('Are you sure to delete the ticket?'))
  {
  this.service.deleteTicket(Id)
  .subscribe(
    res=>{
      this.service.refreshList();
      this.toastr.error("Ticket deleted","Ticket Register")
    },
    err=>{console.log(err)}
  )
  }
}

getDetails(Id:number)
{
    this.router.navigate(['app-ticket-detail']);
}

}
