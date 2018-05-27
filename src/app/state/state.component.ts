import { Component, OnInit } from '@angular/core';
import { TitleOfPost, ArticleService } from '../article.service';


@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  constructor(private ArticleS: ArticleService) { }

  trac: TitleOfPost[];

  ngOnInit() {
    this.trac = this.ArticleS.getPosts();
  }

}
