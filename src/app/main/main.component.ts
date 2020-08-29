import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // leaflet map's state and config
  map;
  feature;
  options = {
    layers: [L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')],
    zoom: 5,
    center: L.latLng(37.0902, -95.7129)
  };

  constructor(private dataService: DataService) {
  }

  ngOnInit(){}

  // called when the Leaflet map is loaded
  onMapReady(map){

    //create the map
    this.map = map;

    // subscribe to data arrival with data loader function
    this.dataService.getData().subscribe(data => {this.onDataLoaded(data)})
  }

  // called when the data has been loaded
  onDataLoaded(data){
    this.feature = L.geoJSON(data, {
      style: {weight: 1, color: 'blue', fillOpacity: 0.5},
    }).addTo(this.map);
  }
}
