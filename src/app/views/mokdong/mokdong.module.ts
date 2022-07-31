import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonGroupsComponent } from './button-groups/button-groups.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';

import { MokdongRoutingModule } from './mokdong-routing.module';

import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  NavbarModule,
  NavModule,
  SharedModule,
  UtilitiesModule,
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';
import { Snd1Component } from './snd1/snd1.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    ButtonsComponent,
    ButtonGroupsComponent,
    DropdownsComponent,
    Snd1Component,
  ],
  imports: [
    CommonModule,
    MokdongRoutingModule,
    ButtonModule,
    ButtonGroupModule,
    GridModule,
    IconModule,
    CardModule,
    UtilitiesModule,
    DropdownModule,
    SharedModule,
    FormModule,
    ReactiveFormsModule,
    DocsComponentsModule,
    NavbarModule,
    CollapseModule,
    NavModule,
    NavbarModule,
    AgGridModule
  ]
})
export class MokdongModule {
}
