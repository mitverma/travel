import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {
  public itineraryData: any;
  constructor() { }

  getItineraryData(){
    return this.itineraryData;
  }

  setItineraryData(data){
    this.itineraryData = data;
  }
}
