import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonGroupsComponent } from './button-groups/button-groups.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { Snd1Component } from './snd1/snd1.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buttons'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'buttons'
      },
      {
        path: 'snd1',
        component: Snd1Component,
        data: {
          title: 'Buttons'
        }
      },
      {
        path: 'snd2',
        component: ButtonGroupsComponent,
        data: {
          title: 'Button groups'
        }
      },
      {
        path: 'snd3',
        component: DropdownsComponent,
        data: {
          title: 'Dropdowns'
        }
      },
      {
        path: 'snd4',
        component: DropdownsComponent,
        data: {
          title: 'Dropdowns'
        }
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MokdongRoutingModule {
}
