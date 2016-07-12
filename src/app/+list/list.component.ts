import { Component, OnInit, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ObjectionComponent } from './objection/objection.component';
import { Objection } from '../objection';
import { Rebuttal } from '../rebuttal';
import { DataService } from '../data.service';

@Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
  providers: [DataService],
  directives: [ObjectionComponent]
})
export class ListComponent implements OnInit {

  
  objections: Objection[];
  private sub: any;
  editable: boolean = false;
  touched: boolean = false;
  expanded: boolean = false;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute) {
   // from https://github.com/thelgevold/angular-2-samples/blob/master/components/http/http.ts
    // this.dataService.getObjections()
    // .then((res: any) => {
    //     this.objections = res.json();    
    // });
    
    // from http://plnkr.co/edit/z8VzCDYNrQR4KzpTVqI7?p=preview
    this.sub = this.route
      .params
      .subscribe(params => {
        this.dataService.getObjections()
          .then(objections => {
            this.objections = objections.json();
          })
      });          
     }

ngOnInit() {
}

  
  
setTouched() {
  this.touched = true;
}

goTo(id) {
      //  var y = document.getElementById(id).getBoundingClientRect().top - $('div .row')[0].getBoundingClientRect().bottom - 10;
      //  window.scrollBy(0,y);
      //  var span = $($('#' + id).parent('div')[0]).find('span')[0];
      //  toggleRebuttals(span);
}

toggleEditable() {
  this.editable = !this.editable;  
}

expandAll() {
  this.expanded = true;
}

collapseAll() {
  this.expanded = false;
}

saveAll() {
  this.dataService.saveObjections(this.objections);

  this.objections.forEach(objection => {
       objection.reordered = false;
       objection.rebuttals.forEach(rebuttal =>
         rebuttal.touched = false);
       });
  this.touched = false;
}


}
