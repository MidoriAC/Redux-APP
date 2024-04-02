import { Component, inject } from '@angular/core';
import { ChildComponent } from './child.component';
import { Store } from '@ngrx/store';
import { CounterActions } from './counter.actions';
import { selectCounter } from './counter.selectors';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, AsyncPipe, JsonPipe],
  template: `
    <div class="row text-center">
      <div class="col">
        <h1>Contador</h1>
        <h2>{{ counter().counter }}</h2>
      </div>
    </div>

    <div class="row text-center">
      <div class="col">
        <button (click)="increment(+1)" class="btn btn-primary mx-2">Incrementar</button>
        <button (click)="increment(-1)" class="btn btn-info">Decrementar</button>
      </div>
    </div>

    <hr>

    <div class="row text-center">
      <div class="col">
        <app-child />
      </div>
    </div>
  `,
  styles: ``
})
export class ParentComponent {
  private store = inject(Store);

  counter = this.store.selectSignal(selectCounter);

  increment(value: number) {
    this.store.dispatch(CounterActions.increment({value}))
  }
}
