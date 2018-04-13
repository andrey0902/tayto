/**
 * Created by andrei on 09.09.2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VerstkaComponent } from './verstka.component';

@NgModule({
 imports: [RouterModule.forChild([{
   path: 'verstka',
   component: VerstkaComponent
 }])],
 exports: [RouterModule],
 declarations: [],
 providers: [],
})
export class VerstkaRoutinnModule { }
