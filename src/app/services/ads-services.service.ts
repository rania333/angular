import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsServicesService {
  private allAds: string[];

  constructor() {
    this.allAds = ['sale up to 25%', 'sale up to 50%', 'sale up to 75%',
  'no sales', 'sale up to 90%'];
  }

  getAllAds(timerInSec: number): Observable<string> {
    return new Observable <string>(observer => {
      //handle all logic -> access 3 method, next error complete
      let counter = 0
      let adsInterval = setInterval(() => {
        if(counter == this.allAds.length) {
          observer.complete(); //complete observer
        }
        if (this.allAds[counter].includes('no sales')) {
          observer.error("there are no sales today");
        }
        //send data
        observer.next('Today Sales is: ' + this.allAds[counter]);
        counter++;
      }, timerInSec*1000)
      //to stop observable

      return {
        unsubscribe() {
          console.log('observable ended');
          clearInterval(adsInterval);
        }
      }
    })
  }
}
