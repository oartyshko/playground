import {Component} from 'angular2/core';

@Component({
    selector: 'sm-home',
    template: require('./home.html')
})
export class Home {
    ngOnInit() {
        console.log('Init Home'); // eslint-disable-line
        this.someData = {name: 'Test User', company: 'ZZZ'};
    }
}
