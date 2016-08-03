import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { SortablejsOptions, SORTABLEJS_DIRECTIVES } from 'angular-sortablejs';

import { ObjectionModel } from '../../objection.model';
import { RebuttalModel } from '../../rebuttal.model';
import { RebuttalComponent } from '../rebuttal/rebuttal.component';
import { ObjectionActions } from './objection.actions';

@Component({
    moduleId: module.id,
    selector: 'list-objection',
    templateUrl: 'objection.component.html',
    styleUrls: ['objection.component.css'],
    properties: ['objection'],
    providers: [ObjectionActions],
    directives: [RebuttalComponent, SORTABLEJS_DIRECTIVES],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectionComponent implements OnInit {
    @Input() objection: ObjectionModel;
    @Input() editable = false;
    @Output() onEdit = new EventEmitter();
    expanded: boolean = false;
    options: SortablejsOptions = {
        handle: ".drag-handle",
        disabled: false,
        group: {
            name: "a",
            pull: 'clone'
        },
        animation: 0
        //       onUpdate: function(evt) {
        //          console.log(evt.item.getAttribute('id'))
        //touch(evt.item);
        //      setReordered();
        //      emitEdit();
        //      }
    };
    rebuttalID: number;

    constructor(private objectionActions: ObjectionActions) {
    }

    updateSortable(evt) {
        this.touch(this.getRebuttalById(evt.item.getAttribute('id').substr(9)));   // this is weird
        this.setReordered();
        this.emitEdit();
    }

    getRebuttalById(id) {
        for(var i=0; i< this.objection.rebuttals.length; i++) {
            var rebuttal = this.objection.rebuttals[i];
            if(rebuttal.id == +id) {
                return rebuttal;
            }
        }
        return undefined;
    }
    
    touch(rebuttal) {
        rebuttal.touched = true;
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

    addRebuttal(rebuttal) {
     //   this.store.dispatch(addRebuttal(rebuttal, this.rebuttalID++));
        // this.objection.rebuttals.push(
        //     {
        //         id: 0,
        //         shortName: '',
        //         longName: '',
        //         link: '',
        //         touched: false,
        //         editable: true,
        //         comments: ''
        //     })
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
