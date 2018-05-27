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

  constructor(private route: ActivatedRoute) { }

  enter() {
    this.mouseenter = !this.mouseenter;
  }

  enter1 () {
    this.mouseenter1 = !this.mouseenter1;
  }

  visiableh1() {
    this.visibleh1 = !this.visibleh1;
  }

  visiablet() {
    this.visiblet = !this.visiblet;
  }

  ngOnInit() {
    this.route.params.subscribe(a => {
      this.id = a.id,
      this.article = JSON.parse(localStorage.getItem('' + this.id));
    });
  }

  new_comment(comment: any) {
    this.article.comments.push(JSON.parse(comment));
  }
}
