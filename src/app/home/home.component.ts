import {Component} from '@angular/core';
import {AppState} from '../app.service';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home', 
   styleUrls: [require('!style!css!sass!../../sass/pages/_home.scss')],
   // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.,
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  // Our list of styles in our component. We may add more to compose many styles together
  //styles: [ require('./home.css') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./home.html')
})
export class Home {

  // TypeScript public modifiers
  constructor(public appState: AppState) {
    console.log('hello `Home` component');

  }

}
