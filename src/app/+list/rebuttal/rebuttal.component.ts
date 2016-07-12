import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';

import { Rebuttal } from '../../rebuttal';

@Component({
    moduleId: module.id,
    selector: 'list-rebuttal',
    templateUrl: 'rebuttal.component.html',
    styleUrls: ['rebuttal.component.css'],
    directives: [Dragula],
    viewProviders: [DragulaService]
})
export class RebuttalComponent implements OnInit {
  @Input() rebuttal: Rebuttal;
  @Input() editable = false;
  @Output() onCancel = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  oldShortName: string;
  oldLongName: string;
  oldLink: string;
  oldComments: string;
  
  constructor() {}

  ngOnInit() {
  }
  
  toggleEditable() {
    this.rebuttal.editable = !this.rebuttal.editable;
  }
  
  cancel() {
    if(this.rebuttal.id==0) {
      this.onCancel.emit(null);
      return;
    }
      this.rebuttal.shortName = this.oldShortName;
      this.rebuttal.longName = this.oldLongName;
      this.rebuttal.link = this.oldLink;
      this.rebuttal.comments = this.oldComments;
      this.toggleEditable(); 
  }
  
  save() {
    this.rebuttal.touched = 
    this.rebuttal.shortName != this.oldShortName ||
    this.rebuttal.longName != this.oldLongName ||
    this.rebuttal.link != this.oldLink ||
    this.rebuttal.comments != this.oldComments;
    
    this.toggleEditable(); 
    if (this.rebuttal.touched) {
      this.onEdit.emit(null);
    }
  }
  
  edit() {
    this.oldShortName = this.rebuttal.shortName;
    this.oldLongName = this.rebuttal.longName;
    this.oldLink = this.rebuttal.link;
    this.oldComments = this.rebuttal.comments;
    this.toggleEditable();

   /*
     var button = event.target;
     var li = $(button).parent('span').parent('li')[0];
        
     if($(button).text() === '✎') {       
        var b = $(li).find('b')[0];
        var span = $(li).children('span')[1];
        var shortName = $(b).text();
        var longName = $(span).find('span').text();
        var link = $(li).find('a')[0] ? $(li).find('a')[0].href : '';
        
        console.log("LINK " + link);
        
        $(span).remove();
        var s = '<span>'
              + '<input placeholder="Short Name" was="' + htmlEncode(shortName) + '" value="' + htmlEncode(shortName) + '" type="text" class="col-md-3"></input>'
              + '<textarea placeholder="Long Name" was="' + htmlEncode(longName) + '" value="' + htmlEncode(longName) + '" class="form-control"></textarea>'
              + '<input placeholder="Link" was="' + htmlEncode(link) + '" value="' + htmlEncode(link) + '" type="url" class="form-control"></input>'
              + '<textarea placeholder="Comments" class="form-control"></textarea>'
              + '</span>';
        $(li).append($(s));
        $(button).text('💾');
     } else {
        var rebuttalId = $(li).attr('rebuttal-id');
        var span = $(li).children('span')[1];
        var shortName = $(span).find('input')[0].value;
        var longName = $(span).find('textarea')[0].value;
        var link = $(span).find('input')[1].value;
        var comments = $(span).find('textarea')[1].value;
        
        var oldShortName = $($(span).find('input')[0]).attr('was');
        var oldLongName = $($(span).children('textarea')[0]).attr('was');
        var oldLink = $($(span).find('input')[2]).attr('was');
        
        var nothingChanged = 
           shortName === oldShortName
         && longName === oldLongName
             && link === oldLink;
        
        console.log("new link [" + link + "] old link [" + oldLink + "]");
        
        $(span).remove();
        
        var s =
          '     <span>';
        s += '      <b was="' + htmlEncode(oldShortName) + '">' + shortName + '</b>';
        s += '   - ';
        s += '       <span was="' + htmlEncode(oldLongName) + '">' + longName + '</span>';
        if(link) {
          s+= '   <a target="blank" href="' + htmlEncode(addHttp(link)) + '" was="' + htmlEncode(oldLink) + '">&#128279;</a>';
        }
        s += '    <div>' + htmlEncode(comments) + '</div>';
        s += '     </span>';       

        
        $(li).append($(s));
        $(button).text('✎');
             
        if(nothingChanged) return;

        touch(li);
        
      }
      */
    }
}