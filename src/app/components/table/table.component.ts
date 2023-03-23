import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public lista:any = [];

  constructor(private RestService:RestService){

  }
  ngOnInit(): void{
  this.cargarData();

  }
  public cargarData(){
   this.RestService.get('https://jsonplaceholder.typicode.com/users')
   .subscribe(respuesta =>{
      this.lista = respuesta
})
  }

}
