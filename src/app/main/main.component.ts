import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  ngOnInit(){
    this.dataService.getData().subscribe(data => {
      console.log("Data from service and in scope within main component: ", data);
    });
  }
}
