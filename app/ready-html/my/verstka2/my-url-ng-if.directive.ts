/**
 * Created by andrei on 14.09.2017.
 */
import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Directive({ selector: '[myUrlNgIf]' })
export class MyUrlNgIfDirective implements OnInit {
  private flagTrigger: boolean = false;
 constructor(private router: Router,
             private route: ActivatedRoute,
             private templateRef: TemplateRef<any>,
             private viewContainer: ViewContainerRef) { }
  public ngOnInit() {
    this.route.url.subscribe((test) => {
      let path: string = test[0].path;
      console.log(test[0].path);
      if (path === 'verstka') {
        this.viewContainer.createEmbeddedView(this.templateRef);
        return;
      }
      this.viewContainer.clear();
    });
  }
}
