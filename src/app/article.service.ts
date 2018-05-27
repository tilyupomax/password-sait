import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export class TitleOfPost {  // short posts
  constructor (public name: string, public id: number) {}
}

export class Comment {
  constructor (
    public user_name: string,
    public comment: string,
  ) {}
}

export class ShortPost {
  name_of_article: string;
  article: string;
  comments: {user_name: string, comment: string}[];
  likes: number;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  posts: TitleOfPost[] = [];
  new_post: ShortPost;

  countPost = 1;

  getPosts(): TitleOfPost[] {
    return this.posts;
  }

  addPost(name: string, article: string) {
    this.posts.push(new TitleOfPost(name, this.countPost));

    this.new_post = {
      name_of_article: name,
      article: article,
      comments: [],
      likes: 0
    }

    localStorage.setItem('' + this.countPost, JSON.stringify(this.new_post));
    console.log(localStorage.getItem('' + this.countPost));
    this.countPost++;
  }
}
