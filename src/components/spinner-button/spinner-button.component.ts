import {ChangeDetectionStrategy, Component, Directive, ElementRef, forwardRef, Inject, Optional, Renderer2, Self, ViewEncapsulation} from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {Platform} from "@angular/cdk/platform";
import {FocusMonitor} from "@angular/cdk/a11y";


@Component({
  selector: `button[mat-spinner-button], button[mat-spinner-raised-button], button[mat-spinner-icon-button],
             button[mat-spinner-fab], button[mat-spinner-mini-fab],
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
export class HyMatSpinnerButtonComponent extends MatButton {

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
  selector: `a[mat-spinner-button], a[mat-spinner-raised-button], a[mat-spinner-icon-button], a[mat-spinner-fab], a[mat-spinner-mini-fab],
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
export class HyMatSpinnerButtonAnchor extends MatAnchor {
  constructor(platform: Platform,
              focusMonitor: FocusMonitor,
              elementRef: ElementRef,
              renderer: Renderer2) {
    super(platform, focusMonitor, elementRef, renderer);
  }
}


/** Default color palette for round buttons (mat-fab and mat-mini-fab) */
const DEFAULT_ROUND_BUTTON_COLOR = 'accent';


/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
@Directive({
  selector: 'button[mat-spinner-button], button[mat-spinner-button], a[mat-spinner-button], a[mat-spinner-button]',
  host: {'class': 'mat-button mat-spinner-button'}
})
export class HyMatSpinnerButtonCssMatStyler {
}

/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
@Directive({
  selector:
  'button[mat-spinner-raised-button], button[mat-spinner-raised-button], ' +
  'a[mat-spinner-raised-button], a[mat-spinner-raised-button]',
  host: {'class': 'mat-raised-button mat-spinner-raised-button'}
})
export class HyMatSpinnerRaisedButtonCssMatStyler {
}

/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
@Directive({
  selector:
    'button[mat-spinner-icon-button], button[mat-spinner-icon-button], a[mat-spinner-icon-button], a[mat-spinner-icon-button]',
  host: {'class': 'mat-icon-button mat-spinner-icon-button'}
})
export class HyMatSpinnerIconButtonCssMatStyler {
}

/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
@Directive({
  selector: 'button[mat-spinner-fab], button[mat-spinner-fab], a[mat-spinner-fab], a[mat-spinner-fab]',
  host: {'class': 'mat-fab mat-spinner-fab'}
})
export class HyMatSpinnerFab {
  constructor(@Self() @Optional() @Inject(forwardRef(() => MatButton)) button: MatButton,
              @Self() @Optional() @Inject(forwardRef(() => MatAnchor)) anchor: MatAnchor) {
    // Set the default color palette for the mat-fab components.
    // (button || anchor).color = 'accent';
  }
}

/**
 * Directive that targets mini-fab buttons and anchors. It's used to apply the `mat-` class
 * to all mini-fab buttons and also is responsible for setting the default color palette.
 * @docs-private
 */
@Directive({
  selector: 'button[mat-spinner-mini-fab], button[mat-spinner-mini-fab], a[mat-spinner-mini-fab], a[mat-spinner-mini-fab]',
  host: {'class': 'mat-mini-fab mat-spinner-mini-fab'}
})
export class HyMatSpinnerMiniFab {
  constructor(@Self() @Optional() @Inject(forwardRef(() => MatButton)) button: MatButton,
              @Self() @Optional() @Inject(forwardRef(() => MatAnchor)) anchor: MatAnchor) {
    // Set the default color palette for the mat-mini-fab components.
    // (button || anchor).color = 'accent';
  }
}
