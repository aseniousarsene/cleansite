import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  constructor(private title: Title) {
    title.setTitle('pcs-web - Better Research, Better Design, Better Results');
  }

  ngOnInit() {
  }

}
