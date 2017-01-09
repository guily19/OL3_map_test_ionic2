import {Component, AfterViewInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MapComponent} from '../map-component/map-component';

@Component({
  selector: 'home-page',
  templateUrl: 'build/pages/home/home.html',
  directives: [MapComponent]
})
export class HomePage {
  map: MapComponent;
  constructor(private navCtrl: NavController) {

  }

  ngAfterViewInit(){
    console.log("Home Load")
  }
}
