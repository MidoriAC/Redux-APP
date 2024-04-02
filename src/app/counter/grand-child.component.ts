import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCounter } from './counter.selectors';
import { CounterActions } from './counter.actions';

@Component({
  selector: 'app-grand-child',
  standalone: true,
  imports: [],
  template: `
    <div class="row text-center">
      <div class="col">
        <h1>Contador</h1>
        <h2>{{ counter().counter }}</h2>
      </div>
    </div>

    <div class="row text-center">
      <div class="col">
        <button (click)="reset()" class="btn btn-danger">Reset</button>
      </div>
    </div>
  `,
  styles: ``,
})
export class GrandChildComponent {
  private store = inject(Store);

  counter = this.store.selectSignal(selectCounter);

  reset() {
    this.store.dispatch(CounterActions.reset());
  }
}
