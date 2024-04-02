import { Component, inject } from '@angular/core';
import { GrandChildComponent } from './grand-child.component';
import { Store } from '@ngrx/store';
import { selectCounter } from './counter.selectors';
import { CounterActions } from './counter.actions';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [GrandChildComponent],
  template: `
    <div class="row text-center">
      <div class="col">
        <h1>Contador</h1>
        <h2>{{ counter().counter }}</h2>
      </div>
    </div>

    <div class="row text-center">
      <div class="col">
        <button (click)="multiply()" class="btn btn-primary mx-2">
          Multiplicar
        </button>
        <button (click)="split()" class="btn btn-info">Dividir</button>
      </div>
    </div>
    <hr />

    <div class="row text-center">
      <div class="col">
        <app-grand-child />
      </div>
    </div>
  `,
  styles: ``,
})
export class ChildComponent {
  private store = inject(Store);

  counter = this.store.selectSignal(selectCounter);

  multiply() {
    this.store.dispatch(CounterActions.multiply());
  }

  split() {
    this.store.dispatch(CounterActions.split());
  }
}
