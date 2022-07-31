import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';



import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  SharedModule,
} from '@coreui/angular';

import { DocsComponentsModule } from '@docs-components/docs-components.module';

import { SangamRoutingModule } from './sangam-routing.module';
import { RangesComponent } from './ranges/ranges.component';
import { FloatingLabelsComponent } from './floating-labels/floating-labels.component';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { SelectComponent } from './select/select.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { LayoutComponent } from './layout/layout.component';
import { ValidationComponent } from './validation/validation.component';
import { Snd1Component } from './snd1/snd1.component';
import { Snd2Component } from './snd2/snd2.component';
import { Snd3Component } from './snd3/snd3.component';


@NgModule({
  declarations: [
    RangesComponent,
    FloatingLabelsComponent,
    FormControlsComponent,
    SelectComponent,
    InputGroupsComponent,
    LayoutComponent,
    ValidationComponent,
    Snd1Component,
    Snd2Component,
    Snd3Component
  ],
  imports: [
    CommonModule,
    SangamRoutingModule,
    DocsComponentsModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule,
    AgGridModule,
  ],
})
export class SangamModule {
}
