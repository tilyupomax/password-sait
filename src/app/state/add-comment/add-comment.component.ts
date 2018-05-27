import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  @Output() get = new EventEmitter();
  user: string;
  text: string;

  constructor() { }

  ngOnInit() {
  }

  new_comment() {
    this.get.emit(JSON.stringify({user_name: this.user, comment: this.text}));
  }

}
