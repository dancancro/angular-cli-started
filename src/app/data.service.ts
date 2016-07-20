import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ObjectionModel } from './objection';
import { Area } from './area';

let objectionsPromise;

@Injectable()
export class DataService {
    result: Object;
    combined: any;
    error: Object;
    getUrl: string = 'https://script.google.com/macros/s/AKfycbymzGKzgGkVo4kepy9zKIyDlxbnLbp-ivCvj8mVMClmWgr-V-g/exec?json=1';
    //getUrl: string = './objections.json';
    postUrl: string = 'https://script.google.com/macros/s/AKfycbymzGKzgGkVo4kepy9zKIyDlxbnLbp-ivCvj8mVMClmWgr-V-g/exec';

    static getObjection(objections: any[], id: number): ObjectionModel {
        return objections.filter(function(objection) {
            return objection.id === id
        })[0];
    }

    constructor(private http: Http) {
        objectionsPromise = this.http.get(this.getUrl).toPromise();
    }

    getObjections() {
        return objectionsPromise;
    }

    saveObjections(objections) {

        var submission = JSON.stringify({
            "orderings": getOrderings(objections),
            "edits": getRebuttalEdits(objections)
        });
        console.log(submission);

        function getOrderings(objections) {
            return objections.filter(objection => objection.reordered)
                .map(objection => {
                    return {
                        "id": objection.id,
                        "rebuttals": objection.rebuttals.map(rebuttal => rebuttal.id)
                    }
                }
                )
        }

        function getRebuttalEdits(objections) {
            var edits = []
            objections.forEach(objection =>
                objection.rebuttals.filter(rebuttal => rebuttal.touched).forEach(rebuttal =>
                    edits.push({
                        "rebuttalId": rebuttal.id,
                        "shortName": rebuttal.oldShortName == rebuttal.shortName ? '' : rebuttal.shortName,
                        "longName": rebuttal.oldLongName == rebuttal.longName ? '' : rebuttal.longName,
                        "link": rebuttal.oldLink == rebuttal.link ? '' : rebuttal.link,
                        "comments": rebuttal.comments
                    })
                )
            );
            return edits;
        }


        alert('Thank you! We have received your change suggestions and will review them for inclusion in the resource.');



        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post(this.postUrl, submission, { headers: headers })
            .map((res: Response) => res.json())
            .subscribe();
        //.subscribe(() res:Benefit) => this.postResponse = res);

    }
}
