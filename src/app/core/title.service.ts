import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  public readonly appTitle: string = 'Office';

  constructor(private readonly title: Title) {}

  public setTitle(newTitle: string): void {
    this.title.setTitle(`${newTitle} | ${this.appTitle}`);
  }
}
