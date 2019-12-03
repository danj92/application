import { Component, OnInit, TemplateRef, ViewContainerRef, ViewChild, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-simple-menu',
  templateUrl: './simple-menu.component.html',
  styleUrls: ['./simple-menu.component.scss']
})
export class SimpleMenuComponent implements OnInit, OnDestroy {

  @ViewChild('content', {static: true, read: ViewContainerRef}) content: ViewContainerRef;

  templateRef: TemplateRef<any>;

  closingResolve: () => void;

  closingPromise = new Promise<void>((resolve, reject) => {
    this.closingResolve = resolve;
  });

  constructor() { }

  ngOnInit() {
    if (!this.templateRef) {
      console.error('SimpleMenuComponent: template not specified');
      return;
    }
    this.content.createEmbeddedView(this.templateRef);
  }

  @HostListener('window:popstate')
  onHistoryChange() {
    this.hide();
  }

  hide() {
    this.closingResolve();
  }

  ngOnDestroy() {
    this.hide();
  }

}
