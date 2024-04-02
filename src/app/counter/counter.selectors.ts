import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectCounter = createFeatureSelector<{counter: number}>('counter');
