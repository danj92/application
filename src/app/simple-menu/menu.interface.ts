import {
  OverlayConfig,
  ConnectedPosition,
} from '@angular/cdk/overlay';

export type WidthStrategy = 'fixed' | 'matchParent';

export type ScrollStrategy = 'noop' | 'block' | 'reposition' | 'close';

export type MenuSize = 'small' | 'medium' | 'big';

export interface MenuOptions {
  connectTo?: HTMLElement;
  overlayConfig?: OverlayConfig;
  animationsEnabled?: boolean;
  size?: MenuSize;
  widthStrategy?: WidthStrategy;
  dontFocusOnShow?: boolean;
  highlightFirst?: boolean;
  scrollStrategy?: ScrollStrategy;
  positions?: ConnectedPosition[];
}
