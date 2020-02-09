import { Component, OnInit } from '@angular/core';
import { ItineraryService } from '../itinerary.service'

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss']
})
export class ItineraryComponent implements OnInit {
  itineraryData: any;
  constructor(public itineraryService: ItineraryService) { }

  ngOnInit() {
    this.itineraryData =  this.itineraryService.getItineraryData();
  }

}
