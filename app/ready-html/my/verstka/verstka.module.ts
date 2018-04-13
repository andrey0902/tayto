/**
 * Created by andrei on 09.09.2017.
 */
import { NgModule } from '@angular/core';

import { VerstkaComponent } from './verstka.component';
import { VerstkaRoutinnModule } from './verstka-routing.module';
import { MyUrlNgIfDirective } from './my-url-ng-if.directive';

@NgModule({
 imports: [VerstkaRoutinnModule],
 exports: [],
 declarations: [
   VerstkaComponent,
   MyUrlNgIfDirective
 ],
 providers: [],
})
export class VerstkaModule { }
