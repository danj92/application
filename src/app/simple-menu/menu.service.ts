import { Injectable, TemplateRef } from '@angular/core';
import { MenuOptions } from './menu.interface';
import { Overlay, ConnectedPosition, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { SimpleMenuComponent } from './simple-menu/simple-menu.component';

const DEFAULT_POSITIONS: ConnectedPosition[] = [
  {
    originX: 'start',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'top',
  },
  {
    originX: 'start',
    originY: 'top',
    overlayX: 'start',
    overlayY: 'bottom',
  },
  {
    originX: 'end',
    originY: 'bottom',
    overlayX: 'end',
    overlayY: 'top',
  },
  {
    originX: 'end',
    originY: 'top',
    overlayX: 'end',
    overlayY: 'bottom',
  },
];

@Injectable()
export class MenuService {
  menu: SimpleMenuComponent;

  overlayRef: OverlayRef;

  constructor(private overlay: Overlay) {
    window.addEventListener('click', e => {
      if (this.overlayRef && this.overlayRef.hostElement) {
        const target = e.target as HTMLElement;
        const isMenuClick = this.overlayRef.hostElement.contains(target);
        if (!isMenuClick) {
          this.hide();
        }
      }
    });
  }

  open(templateRef: TemplateRef<any>, options: MenuOptions = {}) {
    this.hide(); // hide previous if opened

    options.overlayConfig = options.overlayConfig || {};

    const connectTo = options.connectTo;

    const width = this.getWidth(options);

    const maxHeight = options.overlayConfig.maxHeight || 250;

    const scrollStrategyKey = options.scrollStrategy || 'close';

    const scrollStrategy = this.overlay.scrollStrategies[scrollStrategyKey]();

    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(connectTo)
      .withPositions(options.positions || DEFAULT_POSITIONS);

    const overlayRef = this.overlay.create({
      width,
      height: options.overlayConfig.height,
      maxHeight,
      positionStrategy,
      scrollStrategy,
    });
    const portal = new ComponentPortal(SimpleMenuComponent);
    const componentRef = overlayRef.attach(portal);
    const menu = componentRef.instance;
    // console.log('templateRef', templateRef)
    menu.templateRef = templateRef;
    Object.assign(menu, options);

    menu.closingPromise.then(() => this.hide(overlayRef, menu));

    this.overlayRef = overlayRef;
    this.menu = menu;

    return menu;
  }

  hide(
    overlayRef: OverlayRef = this.overlayRef,
    menu: SimpleMenuComponent = this.menu,
  ) {
    if (menu) {
      overlayRef.dispose();
      menu.closingResolve();
      if (this.menu === menu) {
        this.menu = null;
      }
    }
  }

  private getWidth(options: MenuOptions) {
    if (options.widthStrategy === 'matchParent' && options.connectTo) {
      return options.connectTo.offsetWidth;
    }
    if (options.overlayConfig.width) {
      return options.overlayConfig.width;
    }
    return options.size === 'big' ? 260 : 200;
  }
}
