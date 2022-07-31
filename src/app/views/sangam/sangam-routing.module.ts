import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FloatingLabelsComponent } from './floating-labels/floating-labels.component';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { RangesComponent } from './ranges/ranges.component';
import { SelectComponent } from './select/select.component';
import { LayoutComponent } from './layout/layout.component';
import { ValidationComponent } from './validation/validation.component';
import { Snd1Component } from './snd1/snd1.component';
import { Snd2Component } from './snd2/snd2.component';
import { Snd3Component } from './snd3/snd3.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Forms'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'form-control'
      },
      {
        path: 'snd1',
        component: Snd1Component,
        data: {
          title: 'SND1'
        }
      },
      {
        path: 'snd2',
        component: Snd2Component,
        data: {
          title: 'Select'
        }
      },
      {
        path: 'snd3',
        component: Snd3Component,
        data: {
          title: 'Range'
        }
      },
      {
        path: 'input-group',
        component: InputGroupsComponent,
        data: {
          title: 'Input Group'
        }
      },
      {
        path: 'floating-labels',
        component: FloatingLabelsComponent,
        data: {
          title: 'Floating Labels'
        }
      },
      {
        path: 'layout',
        component: LayoutComponent,
        data: {
          title: 'Layout'
        }
      },
      {
        path: 'validation',
        component: ValidationComponent,
        data: {
          title: 'Validation'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SangamRoutingModule {
}
