import {Component, ViewChild, AfterViewInit, Renderer} from '@angular/core';
import {IONIC_DIRECTIVES} from 'ionic-angular';

declare var ol: any;

@Component({
  selector: 'map-component',
  templateUrl: 'build/pages/map-component/map-component.html',
  directives: [IONIC_DIRECTIVES] // makes all Ionic directives available to your component
})




export class MapComponent {

  @ViewChild('map') map;


  constructor(public renderer: Renderer) {


   }

  ngAfterViewInit() {
    var projection = ol.proj.get('EPSG:3857');
    var osm = new ol.layer.Tile({
      source: new ol.source.XYZ({
              crossOrigin: null,
              urls: ['http://a.tiles.mapbox.com/v4/openstreetmap.map-inh7ifmo/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoib3BlbnN0cmVldG1hcCIsImEiOiJncjlmd0t3In0.DmZsIeOW-3x-C5eX-wAqTw', 'http://b.tiles.mapbox.com/v4/openstreetmap.map-inh7ifmo/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoib3BlbnN0cmVldG1hcCIsImEiOiJncjlmd0t3In0.DmZsIeOW-3x-C5eX-wAqTw', 'http://c.tiles.mapbox.com/v4/openstreetmap.map-inh7ifmo/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoib3BlbnN0cmVldG1hcCIsImEiOiJncjlmd0t3In0.DmZsIeOW-3x-C5eX-wAqTw']
      })
    })

    var map = new ol.Map({
        target: 'map',
        layers: [osm],
          controls: ol.control.defaults({
            attribution: false,
            rotate: false,
            rotateOptions: false,
            zoom: false,
            zoomOptions: false
            }),
            source: new ol.source.OSM({
          wrapX: false
      }),
            interactions: ol.interaction.defaults({
          doubleClickZoom :false,
          dragAndDrop: false,
          dragPan: false,
          keyboardPan: false,
          keyboardZoom: false,
          mouseWheelZoom: false,
          pointer: false,
          select: false
      }),
        view: new ol.View({
          center: ol.proj.fromLonLat([0, 0]),
              zoom: 0
        })
      });
  }
}