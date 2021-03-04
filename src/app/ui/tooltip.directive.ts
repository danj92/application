import { OverlayRef, Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  Directive,
  HostListener,
  Input,
  OnInit,
  ComponentRef,
  ElementRef,
  OnDestroy,
} from '@angular/core';

import { Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { ResponsivenessService } from '../core/responsiveness.service';

import { TooltipComponent } from '../ui/tooltip/tooltip.component';

@Directive({ selector: '[appTooltip]' })
export class TooltipDirective implements OnInit, OnDestroy {
  private overlayRef: OverlayRef;

  private subscription = new Subscription();

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
    private responsivenessService: ResponsivenessService,
  ) {}

  ngOnInit() {
    const scrollStrategy = this.overlay.scrollStrategies.close();

    let positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: 'end',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'top',
          offsetY: -8,
          offsetX: 8,
        },
      ]);

    this.subscription.add(
      this.responsivenessService.isTabletOrBelow$
        .pipe(
          filter(v => !!v),
          take(1),
        )
        .subscribe(changed => {
          if (changed) {
            positionStrategy = this.overlayPositionBuilder
              .flexibleConnectedTo(this.elementRef)
              .withPositions([
                {
                  originX: 'start',
                  originY: 'bottom',
                  overlayX: 'start',
                  overlayY: 'top',
                  offsetY: 10,
                  offsetX: 0,
                },
              ]);
          }
        }),
    );

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy,
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @Input() tooltipText = '';

  @HostListener('mouseenter')
  show() {
    const tooltipPortal = new ComponentPortal(TooltipComponent);
    const tooltipRef: ComponentRef<TooltipComponent> = this.overlayRef.attach(
      tooltipPortal,
    );
    tooltipRef.instance.text = this.tooltipText;
  }

  @HostListener('mouseleave')
  hide() {
    this.overlayRef.detach();
  }
}
