import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.scss']
})
export class AttendenceComponent implements OnInit {
 
 




  
  names: any;
  roll:number;
  selectedAll: any;
  selectedNames: any;
    constructor() {
         
    this.names = [
      { name: 'Prashobh',roll:1 , selected: false },
      { name: 'Abraham',roll:2 , selected: false },
      { name: 'Anil',roll:3 , selected: false },
      { name: 'Sam',roll:4 , selected: false },
      { name: 'Natasha',roll:5 , selected: false },
      { name: 'Marry',roll:6 , selected: false },
      { name: 'Zian',roll:7 , selected: false },
      { name: 'karan',roll:8 , selected: false },
    ]
    }
    selectAll() {
        this.selectedAll = !this.selectedAll;

        for (var i = 0; i < this.names.length; i++) {
            this.names[i].selected = this.selectedAll;
        } 
  }
  checkIfAllSelected() {
      var totalSelected =  0;
      for (var i = 0; i < this.names.length; i++) {
            if(this.names[i].selected) totalSelected++;
        } 
    this.selectedAll = totalSelected === this.names.length;

  return true;
  }
  
  ngOnInit() {
    
    }
    Shift: Shift[] = [
      {value: 'Mornning', viewValue: 'Mornning'},
      {value: 'Day', viewValue: 'Day'},
     
    ];
    Version: Version[] = [
      {value: 'Bangla', viewValue: 'Bangla'},
      {value: 'English', viewValue: 'English'},
     
    ];
    Class: Class[] = [
      {value: 'one', viewValue: 'onr'},
      {value: 'two', viewValue: 'two'},
     
    ];
    Section: Section[] = [
      {value: 'one', viewValue: 'A'},
      {value: 'two', viewValue: 'B'},
     
    ];
    AcademicYear: AcademicYear[] = [
      {value: 'one', viewValue: 'A'},
      {value: 'two', viewValue: 'B'},
     
    ];
}




export interface Shift {
  value: string;
  viewValue: string;
}
export interface Version {
  value: string;
  viewValue: string;
}
export interface Class {
  value: string;
  viewValue: string;
}
export interface Section {
  value: string;
  viewValue: string;
}
export interface AcademicYear {
  value: string;
  viewValue: string;
}
