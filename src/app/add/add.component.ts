import { Component} from '@angular/core';
import { ArticleService, TitleOfPost } from '../article.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  name: string;
  title: string;

  constructor(private ArticleS: ArticleService) { }

  set() {
    this.ArticleS.addPost(this.name, this.title);
  }

}
