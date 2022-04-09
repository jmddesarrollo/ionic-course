import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit, OnDestroy {

  superHeroes: Observable<any>;
  publisherSegment: string = '';
  public loadingData: boolean;

  private observables: any[]

  constructor(private dataService: DataService ) { 
    this.loadingData = true;
    this.observables = [];
  }

  ngOnInit() {
    const ob = this.dataService.getHeroes().subscribe((response: any) => {
      this.superHeroes = response;
      this.loadingData = false;
    });

    this.observables.push(ob);
  }

  ngOnDestroy() {
    for (const ob of this.observables) {
      if (ob !== undefined && ob !== null) {
        ob.unsubscribe();
      }
    }
  }  

  segmentChanged( event ) {
    // Una solución para mostrar segmento 'todos'
    // console.log(event.detail.value);
    // if ( event.detail.value === 'todos' ) {
    //   return this.publisher = '';
    // }

    this.publisherSegment = event.detail.value;
  }

}
