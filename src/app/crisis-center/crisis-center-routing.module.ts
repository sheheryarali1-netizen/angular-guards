import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';

const routes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrisisCenterRoutingModule {}
