import {Component} from '@angular/core';

@Component({
    selector: 'courses',
    template: `<h2>{{"Title: " + getTitle()}}</h2>
    <div (click)="divClick()">
        <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor] ="isActive ? 'red' : 'white'" (click)="onClicked($event)">Save</button>
    </div>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    <ul>
        <li>{{courses.students | number}}</li>
        <li>{{courses.price | currency:'BAM':true}}</li>
        <li>{{courses.length | number:'4.2-2'}}</li>
        <li>{{courses.date | date:'shortDate'}}</li>
        <li>{{courses.description | summary}}</li>
    </ul>
    `
})
export class CourseComponent {
    title = "Angular Course";
    email;
    courses = {
        students: 30002,
        price: 300.12,
        length: 30.234,
        date: new Date(2016, 1, 1),
        description: 'Realy long text realy long text realy long text realy long text realy long text realy long text realy long text realy long text'
    }
    getTitle() {
        return this.title;

    }
    isActive = true;
    onClicked($event) {
        $event.stopPropagation();
        console.log("Clickity ", $event);
    }
    divClick(){
        console.log("Divity clickity");
    }
    onKeyUp() { console.log(this.email);}

}