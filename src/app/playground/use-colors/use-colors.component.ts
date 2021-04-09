import { Component } from '@angular/core';

@Component({
  selector: 'app-use-colors',
  templateUrl: './use-colors.component.html',
  styleUrls: ['./use-colors.component.scss'],
})
export class UseColorsComponent {
  MISSING_COLOR =
    'repeating-linear-gradient(45deg, transparent, ' +
    'transparent 5px, #dddddd 5px, #dddddd 10px)';

  BASE_COLORS = [
    '--content',
    '--font-color',
    '--primary',
    '--secondary',
    '--warning',
    '--danger',
  ];

  SHADES = ['-very-light', '-light', '', '-dark'];

  getColorValue(colorName: string) {
    return getComputedStyle(document.body).getPropertyValue(colorName);
  }

  getColorName(baseColor: string, shade: string) {
    return this.getColorValue(baseColor + shade) || this.MISSING_COLOR;
  }
}
