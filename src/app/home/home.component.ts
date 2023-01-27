import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  // mostrar:Boolean;
  // mostrar:boolean=true;
  mostrar = true
  ngOnInit(): void {
    
  }
  
  buscar(){
    this.mostrar=false
    // if(this.mostrar){
    //   this.mostrar=true;
    // }
    // else{
    //   this.mostrar=false;
    // }
    
  }

  

}
