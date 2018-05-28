import { Component, OnInit } from '@angular/core';
import { TitleOfPost, ArticleService, ShortPost } from '../article.service';


@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  constructor(private ArticleS: ArticleService) { }

  list: ShortPost[] = [];
  ids: TitleOfPost[];

  ngOnInit() {
    this.ids = this.ArticleS.getPosts();
    for (let i = 0; i < this.ids.length; i++) {
      this.list.push(JSON.parse(localStorage.getItem('' + this.ids[i].id)));
    }
  }

}
