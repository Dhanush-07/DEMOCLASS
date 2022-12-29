
import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  myname="Dhanush"

  abc(fname:any,lname:any)
  {
    alert("hii ,welcome  "+fname+" "+lname)
    console.log(fname+ ":"+ lname)
  }


  total=0
  emi=0
  cal(p:any,t:any,r:any)
  {
    console.log(p)
    console.log(t)
    console.log(r)

    this.total=p*t*r/100;

    this.emi=this.total/t;

    console.log(this.total)


  }

}
