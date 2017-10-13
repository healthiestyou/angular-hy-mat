///<reference path="spinner-button.component.ts"/>
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdProgressSpinnerModule, MdRippleModule} from '@angular/material';
import {MdSpinnerButtonAnchor, MdSpinnerButtonComponent, MdSpinnerButtonCssMatStyler, MdSpinnerFab, MdSpinnerIconButtonCssMatStyler, MdSpinnerMiniFab, MdSpinnerRaisedButtonCssMatStyler} from "./spinner-button.component";

export * from './spinner-button.component';

const COMPONENTS = [
  MdSpinnerButtonComponent,
  MdSpinnerButtonAnchor,
  MdSpinnerMiniFab,
  MdSpinnerFab,
  MdSpinnerIconButtonCssMatStyler,
  MdSpinnerRaisedButtonCssMatStyler,
  MdSpinnerButtonCssMatStyler
];

@NgModule({
  imports: [CommonModule, MdProgressSpinnerModule, MdRippleModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class SpinnerButtonModule {
}

