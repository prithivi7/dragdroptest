import {AutofillMonitor} from '@angular/cdk/text-field';
import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstNameAutofilled: boolean= false;
  title = 'Dragdroptest';
  firstName:any=''
  lastName:any=''
  mutText:any=[]
  
  lastNameAutofilled: boolean=false;
  // @ViewChild('first') firstName: ElementRef | '';
  // @ViewChild('last', {read: ElementRef}) lastName: ElementRef<HTMLElement> | '';
  // @ViewChild('divToMeasure') divToMeasureElement: ElementRef;


  constructor(private _autofill: AutofillMonitor) {}

  // ngAfterViewInit() {
  //   this._autofill.monitor(this.firstName)
  //       .subscribe(e => this.firstNameAutofilled = e.isAutofilled);
  //   this._autofill.monitor(this.lastName)
  //       .subscribe(e => this.lastNameAutofilled = e.isAutofilled);
  // }

  // ngOnDestroy() {
  //   this._autofill.stopMonitoring(this.firstName);
  //   this._autofill.stopMonitoring(this.lastName);
  // }

  addText(){
    console.log("this.mutText = ",this.mutText)
    this.mutText.push({})
  }
}
