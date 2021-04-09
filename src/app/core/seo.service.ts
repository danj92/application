import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class SeoService {
  constructor(private meta: Meta, private title: Title) {}

  setTitle(title: string) {
    this.setFullTitle(`${title} - MyApp`);
  }

  setFullTitle(title: string) {
    this.title.setTitle(title);
  }

  setDescription(description: string) {
    this.meta.updateTag({ name: 'description', content: description });
  }

  removeDescription() {
    this.meta.removeTag('name=description');
  }
}
