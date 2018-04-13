/**
 * Created by andrei on 09.09.2017.
 */
import { NgModule } from '@angular/core';

import { Verstka2Component } from './verstka2.component';
import { VerstkaRoutinnModule } from './verstka-routing.module';
import { MyUrlNgIfDirective } from './my-url-ng-if.directive';

@NgModule({
 imports: [VerstkaRoutinnModule],
 exports: [],
 declarations: [
   Verstka2Component,
   MyUrlNgIfDirective
 ],
 providers: [],
})
export class VerstkaModule2 { }
