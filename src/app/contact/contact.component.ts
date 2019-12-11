import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit { 
  name:string="";
  phone:string="";
  email:string="";
  endpoint = "http://localhost/sendEmail.php";
  header;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  send(){
    let postVars = {
      email : this.email,
      name : this.name,
      phone : this.phone
    };

    console.log("name    " + this.name+ "  phone    " + this.phone+ "   email    " + this.email);
    console.log(" hi i am in console log   "+postVars);

    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    return this.http.post(this.endpoint, {"name":this.name,
    "email":this.email,
    "phone":this.phone
    }, 
      {headers: this.header , responseType:'text'}).subscribe(
        data => console.log(data),
        error => console.log(error)
    );

      //const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

  
}


   
  
  

}
