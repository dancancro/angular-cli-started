import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { SortablejsOptions, SORTABLEJS_DIRECTIVES } from 'angular-sortablejs';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { RootState } from '../store';

import { ObjectionComponent } from './objection/objection.component';
import { ObjectionModel } from '../objection.model';
import { DataService } from '../data.service';
import { ListActions } from './list.actions';

// Magic selector from ng2-redux that makes an observable out
// of the 'objections' property of your store.
@Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
  pipes: [AsyncPipe],                                           // I don't think this line is necessary
  providers: [DataService, ListActions],
  directives: [ObjectionComponent, SORTABLEJS_DIRECTIVES]
})
export class ListComponent implements OnInit {
  @select('objections') objections$: Observable<ObjectionModel[]>;

  private subscription: any;
  editable: boolean = false;
  touched: boolean = false;
  expanded: boolean = false;
  options: SortablejsOptions = {
    disabled: false
  };
  objectionID: number;

  constructor(
    private ngRedux: NgRedux<any>,      // should this be NgRedux<RootState> ?
    private listActions: ListActions,
    private dataService: DataService) {
  }

  ngOnInit() {
    this.subscription = this.dataService.getObjections().subscribe({
        next: (objections) => this.listActions.fetchObjections(objections),
        error: (err) => this.listActions.error(err)
      });
  }

  addObjection() {
      this.listActions.addObjection("Bernie doesn't have a uterus", 12345);
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
    this.options.disabled = !this.options.disabled;
  }

  expandAll() {
    this.expanded = true;
  }

  collapseAll() {
    this.expanded = false;
  }

  saveAll() {
    //    this.dataxxService.saveObjections(this.store.objections);

    // this.objectionStore.objections.forEach(objection => {
    //   objection.reordered = false;
    //   objection.rebuttals.forEach(rebuttal =>
    //     rebuttal.touched = false);
    // });
    this.touched = false;
  }


}
