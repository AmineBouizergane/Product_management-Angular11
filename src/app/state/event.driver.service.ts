import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ActionEvent} from './products.state';

@Injectable({providedIn:'root'})
export class EventDriverService{
  sourceEventSubject:Subject<ActionEvent>=new Subject<ActionEvent>();
  sourceEventSubjectObservable=this.sourceEventSubject.asObservable();

  publishEvent(event:ActionEvent){
    this.sourceEventSubject.next(event);
  }
}
