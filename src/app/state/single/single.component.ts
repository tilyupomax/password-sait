import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShortPost } from '../../article.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  id: number;
  article: ShortPost;
  mouseenter = false;
  mouseenter1 = false;
  visibleh1 = true;
  visiblet = true;
  like = true;

  constructor(private route: ActivatedRoute) { }

  enter() {
    this.mouseenter = !this.mouseenter;
  }

  enter1 () {
    this.mouseenter1 = !this.mouseenter1;
  }

  visiableh1() {
    if (!this.visibleh1) {
      localStorage[this.id] = JSON.stringify(this.article);
    }
    this.visibleh1 = !this.visibleh1;
  }

  visiablet() {
    if (!this.visiblet) {
      localStorage[this.id] = JSON.stringify(this.article);
    }

    this.visiblet = !this.visiblet;
  }

  toggle_like() {
    if (this.like) {
      this.article.likes++;
      this.like = false;
      localStorage[this.id] = JSON.stringify(this.article);
    } else {
      this.article.likes--;
      this.like = true;
      localStorage[this.id] = JSON.stringify(this.article);
    }
  }

  ngOnInit() {
    this.route.params.subscribe(a => {
      this.id = a.id,
      this.article = JSON.parse(localStorage.getItem('' + this.id));
    });
  }

  new_comment(comment: any) {
    this.article.comments.push(JSON.parse(comment));
    localStorage[this.id] = JSON.stringify(this.article);
  }
}
