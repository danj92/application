import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input()
  public reference: HTMLElement;

  @ViewChild(CdkPortal)
  public contentTemplate: CdkPortal;

  protected overlayRef: OverlayRef;

  public showing = false;

  public instance: HTMLElement;

  @Output()
  public hideDropdown = new EventEmitter<void>();

  constructor(protected overlay: Overlay) {}

  public show() {
    this.overlayRef = this.overlay.create(this.getOverlayConfig());
    const ref = this.overlayRef.attach(this.contentTemplate);
    this.syncWidth();
    this.overlayRef.backdropClick().subscribe(() => this.hide());
    this.showing = true;
    // access to custom-select-option to take the height inside custom-select
    this.instance = ref.rootNodes[1];
  }

  public hide() {
    this.overlayRef.detach();
    this.showing = false;
    this.hideDropdown.next();
  }

  @HostListener('window:resize')
  public onWinResize() {
    this.syncWidth();
  }

  getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.reference)
      .withPush(false)
      .withPositions([
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
      ]);

    const scrollStrategy = this.overlay.scrollStrategies.block();

    return new OverlayConfig({
      width: '100%',
      height: `200px`,
      positionStrategy,
      scrollStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
    });
  }

  private syncWidth() {
    if (!this.overlayRef) {
      return;
    }

    const refRect = this.reference.getBoundingClientRect();
    this.overlayRef.updateSize({ width: refRect.width });
  }
}
