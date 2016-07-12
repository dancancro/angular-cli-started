import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';

import { Objection } from '../../objection';
import { Rebuttal } from '../../rebuttal';
import { RebuttalComponent } from '../rebuttal/rebuttal.component';

@Component({
  moduleId: module.id,
  selector: 'list-objection',
  templateUrl: 'objection.component.html',
  styleUrls: ['objection.component.css'],
  properties: ['objection'],
  directives: [RebuttalComponent, Dragula],
  viewProviders: [DragulaService]
})
export class ObjectionComponent implements OnInit {
  @Input() objection: Objection;
  @Input() editable = false;
  @Output() onEdit = new EventEmitter();
  expanded: boolean = false;

  constructor(private dragulaService: DragulaService) {
    dragulaService.setOptions('sixth-bag', {
      moves: function (el, container, handle) {
        return handle.className === 'drag-handle';
      }
    });
    dragulaService.drop.subscribe((value) => {
      console.log(`drop: ${value[0]}`);
      this.onDrop(value);
    });
  }


  private onDrop(value) {
      let el = value[2]
    // do something
      this.setReordered();
      this.emitEdit();
  }
  
  ngOnInit() {
  }

  emitEdit() {
    this.onEdit.emit(null);
  }

  setReordered() {
    this.objection.reordered = true;
  }

/*
  sortedRebuttals(): Rebuttal[] {
    return this.objection.rebuttals.sort(this.sortOn('sortOrder', 1, 'date', -1))
  }
*/

  addRebuttal() {
    this.objection.rebuttals.push(
      {
        id: 0,
        shortName: '',
        longName: '',
        link: '',
        touched: false,
        editable: true,
        comments: ''
      })
  }

  cancelRebuttal(rebuttal) {
    for (var i = 0; i < this.objection.rebuttals.length; i++) {
      if (this.objection.rebuttals[i] == rebuttal) {
        this.objection.rebuttals.splice(i, 1);
        return;
      }
    }
  }

  sortOn(...args: any[]) {

    return function (a, b) {
      var fieldNames = Object.keys(args).filter(function (i) { return +i % 2 === 0 }).map(function (i) { return args[i] });
      var directions = Object.keys(args).filter(function (i) { return +i % 2 === 1 }).map(function (i) { return parseInt(args[i]) });

      for (var i = 0; i < fieldNames.length; i++) {
        if (a[fieldNames[i]] > b[fieldNames[i]]) {
          return directions[i];
        }
        if (a[fieldNames[i]] < b[fieldNames[i]]) {
          return -directions[i];
        }
      }
      // a must be equal to b
      return 0;
    }
  }

  toggleRebuttals() {
    this.expanded = !this.expanded;
  }
  
  setExpanded(expanded) {
    this.expanded = expanded;
  }



}
