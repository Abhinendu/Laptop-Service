import { Injectable } from '@angular/core';
import { Ticket } from './ticket.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }
formData: Ticket = new Ticket();
list :Ticket[];
data:any = localStorage.getItem("key");
user = JSON.parse(this.data);
userId = this.user.userId;
readonly baseUrl='http://localhost:55985/api/Tickets';
readonly newUrl ='http://localhost:55985/api/Users';

postTicket()
{
  return this.http.post(this.baseUrl,this.formData);
}

putTicket()
{
  return this.http.put(`${this.baseUrl}/${this.formData.ticketId}`,this.formData);
}

deleteTicket(Id:number)
{
  return this.http.delete(`${this.baseUrl}/${Id}`);
}

refreshList()
{
  this.http.get(`${this.newUrl}/${this.userId}`)
  .toPromise()
  .then(res=> this.list= res as Ticket[]);

}

getTicketDetail(Id:number)
{
  return this.http.get(`${this.baseUrl}/${Id}`);
}

}
