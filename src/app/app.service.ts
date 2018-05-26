import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export class Title {
  constructor (public name: string, public id: number) {}
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  array: Title[] = [];

  id = 1;

  setLang(): Observable<Title[]> {
    return of(this.array); // тут мы поставим
  }

  set(name: string, title: string) {
    this.array.push(new Title(name, this.id));

    const content = {
      name: name,
      title: title
    };

    localStorage.setItem('' + this.id, JSON.stringify(content));
    console.log(localStorage.getItem('' + this.id));
    this.id++;
  }
}
