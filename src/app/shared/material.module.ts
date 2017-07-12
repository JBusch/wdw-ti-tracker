/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';

import {
  A11yModule,
  MdCommonModule,
  MdRippleModule,
  ObserveContentModule,
  OverlayModule,
  PortalModule
} from '@angular/material'

import {MdButtonToggleModule} from '@angular/material'
import {MdButtonModule} from '@angular/material'
import {MdCheckboxModule} from '@angular/material'
import {MdRadioModule} from '@angular/material'
import {MdSelectModule} from '@angular/material'
import {MdSlideToggleModule} from '@angular/material'
import {MdSliderModule} from '@angular/material'
import {MdSidenavModule} from '@angular/material'
import {MdListModule} from '@angular/material'
import {MdGridListModule} from '@angular/material'
import {MdCardModule} from '@angular/material'
import {MdChipsModule} from '@angular/material'
import {MdIconModule} from '@angular/material'
import {MdProgressSpinnerModule} from '@angular/material'
import {MdProgressBarModule} from '@angular/material'
import {MdInputModule} from '@angular/material'
import {MdSnackBarModule} from '@angular/material'
import {MdTabsModule} from '@angular/material'
import {MdToolbarModule} from '@angular/material'
import {MdTooltipModule} from '@angular/material'
import {MdMenuModule} from '@angular/material'
import {MdDialogModule} from '@angular/material'
import {PlatformModule} from '@angular/material'
import {MdAutocompleteModule} from '@angular/material'
import {StyleModule} from '@angular/material'
import {MdDatepickerModule} from '@angular/material'
import {MdExpansionModule} from '@angular/material'

const MATERIAL_MODULES = [
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdChipsModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  OverlayModule,
  PortalModule,
  StyleModule,
  A11yModule,
  PlatformModule,
  MdCommonModule,
  ObserveContentModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
})
export class MaterialModule {
}
