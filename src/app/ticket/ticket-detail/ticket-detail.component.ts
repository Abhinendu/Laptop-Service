import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Ticket } from 'src/app/shared/ticket.model';
import { TicketService } from 'src/app/shared/ticket.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styles: [
  ]
})
export class TicketDetailComponent implements OnInit {

  Id: any;
  ticket:any;
  constructor(private actRoute: ActivatedRoute,
              private route:RouterModule,
              private service:TicketService) { }

  ngOnInit(): void {
    this.Id=this.actRoute.snapshot.paramMap.get("id");
    this.loadTicketDetails(this.Id);
  }

  loadTicketDetails(Id:any)
  {
    this.service.getTicketDetail(Id).subscribe(tckt=>{
      this.ticket=tckt;
    });
  }
}
