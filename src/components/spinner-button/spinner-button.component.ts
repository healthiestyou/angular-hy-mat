import {ChangeDetectionStrategy, Component, Directive, ElementRef, forwardRef, Inject, Optional, Renderer2, Self, ViewEncapsulation} from '@angular/core';
import {MdAnchor, MdButton} from "@angular/material/button";
import {Platform} from "@angular/cdk/platform";
import {FocusMonitor} from "@angular/cdk/a11y";


@Component({
  selector: `button[md-spinner-button], button[md-spinner-raised-button], button[md-spinner-icon-button],
             button[md-spinner-fab], button[md-spinner-mini-fab],
             button[mat-spinner-button], button[mat-spinner-raised-button], button[mat-spinner-icon-button],
             button[mat-spinner-fab], button[mat-spinner-mini-fab]`,
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.scss'],
  host: {
    '[disabled]': 'disabled || null',
  },
  inputs: ['disabled', 'disableRipple', 'color'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,


})
export class MdSpinnerButtonComponent extends MdButton {

  constructor(platform: Platform,
              focusMonitor: FocusMonitor,
              elementRef: ElementRef,
              renderer: Renderer2) {
    super(renderer, elementRef, platform, focusMonitor);
  }

  private _getSpinnerColor() {
    return this.color;
  }
}


@Component({
  selector: `a[md-spinner-button], a[md-spinner-raised-button], a[md-spinner-icon-button], a[md-spinner-fab], a[md-spinner-mini-fab],
             a[mat-spinner-button], a[mat-spinner-raised-button], a[mat-spinner-icon-button], a[mat-spinner-fab], a[mat-spinner-mini-fab]`,
  host: {
    '[attr.tabindex]': 'disabled ? -1 : 0',
    '[attr.disabled]': 'disabled || null',
    '[attr.aria-disabled]': 'disabled.toString()',
    '(click)': '_haltDisabledEvents($event)',
  },
  inputs: ['disabled', 'disableRipple', 'color'],
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdSpinnerButtonAnchor extends MdAnchor {
  constructor(platform: Platform,
              focusMonitor: FocusMonitor,
              elementRef: ElementRef,
              renderer: Renderer2) {
    super(platform, focusMonitor, elementRef, renderer);
  }
}


/** Default color palette for round buttons (md-fab and md-mini-fab) */
const DEFAULT_ROUND_BUTTON_COLOR = 'accent';


/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
@Directive({
  selector: 'button[md-spinner-button], button[mat-spinner-button], a[md-spinner-button], a[mat-spinner-button]',
  host: {'class': 'mat-button mat-spinner-button'}
})
export class MdSpinnerButtonCssMatStyler {
}

/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
@Directive({
  selector:
  'button[md-spinner-raised-button], button[mat-spinner-raised-button], ' +
  'a[md-spinner-raised-button], a[mat-spinner-raised-button]',
  host: {'class': 'mat-raised-button mat-spinner-raised-button'}
})
export class MdSpinnerRaisedButtonCssMatStyler {
}

/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
@Directive({
  selector:
    'button[md-spinner-icon-button], button[mat-spinner-icon-button], a[md-spinner-icon-button], a[mat-spinner-icon-button]',
  host: {'class': 'mat-icon-button mat-spinner-icon-button'}
})
export class MdSpinnerIconButtonCssMatStyler {
}

/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
@Directive({
  selector: 'button[md-spinner-fab], button[mat-spinner-fab], a[md-spinner-fab], a[mat-spinner-fab]',
  host: {'class': 'mat-fab mat-spinner-fab'}
})
export class MdSpinnerFab {
  constructor(@Self() @Optional() @Inject(forwardRef(() => MdButton)) button: MdButton,
              @Self() @Optional() @Inject(forwardRef(() => MdAnchor)) anchor: MdAnchor) {
    // Set the default color palette for the md-fab components.
    // (button || anchor).color = 'accent';
  }
}

/**
 * Directive that targets mini-fab buttons and anchors. It's used to apply the `mat-` class
 * to all mini-fab buttons and also is responsible for setting the default color palette.
 * @docs-private
 */
@Directive({
  selector: 'button[md-spinner-mini-fab], button[mat-spinner-mini-fab], a[md-spinner-mini-fab], a[mat-spinner-mini-fab]',
  host: {'class': 'mat-mini-fab mat-spinner-mini-fab'}
})
export class MdSpinnerMiniFab {
  constructor(@Self() @Optional() @Inject(forwardRef(() => MdButton)) button: MdButton,
              @Self() @Optional() @Inject(forwardRef(() => MdAnchor)) anchor: MdAnchor) {
    // Set the default color palette for the md-mini-fab components.
    // (button || anchor).color = 'accent';
  }
}
