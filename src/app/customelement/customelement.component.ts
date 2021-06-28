import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-customelement',
  templateUrl: './customelement.component.html',
  styleUrls: ['./customelement.component.scss'],
  encapsulation: ViewEncapsulation.None // <- this allows CSS to bleed to this component from parent app
})
export class CustomelementComponent implements OnInit {

  @Input() mydata: string;
  @Output() OrderEvent: EventEmitter<string> = new EventEmitter();
  public response: Observable<any>;
   myorders = [];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any[])=>{
    //  console.log(data);
      this.myorders = data;
    })  




  }
  
}
