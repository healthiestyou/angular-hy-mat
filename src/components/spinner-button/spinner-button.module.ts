///<reference path="spinner-button.component.ts"/>
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule, MatRippleModule} from '@angular/material';
import {HyMatSpinnerButtonAnchor, HyMatSpinnerButtonComponent, HyMatSpinnerButtonCssMatStyler, HyMatSpinnerFab, HyMatSpinnerIconButtonCssMatStyler, HyMatSpinnerMiniFab, HyMatSpinnerRaisedButtonCssMatStyler} from "./spinner-button.component";

export * from './spinner-button.component';

const COMPONENTS = [
    HyMatSpinnerButtonComponent,
    HyMatSpinnerButtonAnchor,
    HyMatSpinnerMiniFab,
    HyMatSpinnerFab,
    HyMatSpinnerIconButtonCssMatStyler,
    HyMatSpinnerRaisedButtonCssMatStyler,
    HyMatSpinnerButtonCssMatStyler
];

@NgModule({
    imports: [CommonModule, MatProgressSpinnerModule, MatRippleModule],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class HyMatSpinnerButtonModule {
}

