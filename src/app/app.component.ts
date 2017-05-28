// ```
// app.ts
// (c) 2016 David Newman
// blackshuriken@hotmail.com
// app.ts may be freely distributed under the MIT license
// ```

// *src/app/app.ts*

// This file contains the main class as well as the necessary
// decorators for creating the primary `app` `component`

/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';

import {AppState} from './app.service';
import {SocketService} from './Services/socket.service';

import {Home} from './Home/home.component';
import {Medicines} from './Medicine/medicine.component';
import {Inventories} from './Inventory/inventory.component';
// Import NgFor directive
import {NgFor} from '@angular/common';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [ SocketService ],
  directives: [NgFor],
  encapsulation: ViewEncapsulation.None,
  pipes: [],
  // Load our main `Sass` file into our `app` `component`
  styleUrls: [require('!style!css!sass!../sass/main.scss')],
  template: `
    <md-content>
    
      <md-progress-bar mode="indeterminate" color="primary" *ngIf="loading">
      </md-progress-bar>

      <router-outlet></router-outlet>

    </md-content>
  `
})
@RouteConfig([
  { path: '/home', name: 'Home', component: Home },
  { path: '/medicines', name: 'Medicines', component: Medicines},
  { path: '/inventories', name: 'Inventories', component: Inventories, useAsDefault: true}
])
export class App {
  // Pass in our application `state`
  // Alternative to using `redux`
  constructor(public appState: AppState, private socketService: SocketService) {}

  // Fire off upon initialization
  ngOnInit() {

    console.log('Initial App State', this.appState.state);
  }
}
