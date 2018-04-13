/**
 * Created by andrei on 09.09.2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Verstka2Component } from './verstka2.component';

@NgModule({
 imports: [RouterModule.forChild([{
   path: 'verstka2',
   component: Verstka2Component
 },
   {
   path: '#my-menu',
  component: Verstka2Component
}

 ])],
 exports: [RouterModule],
 declarations: [],
 providers: [],
})
export class VerstkaRoutinnModule { }
