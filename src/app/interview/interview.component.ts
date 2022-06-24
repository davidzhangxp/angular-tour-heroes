import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css'],
})
export class InterviewComponent implements OnInit {
  title: string =
    'We are all feeling the impact of COVID-19, and this is especially true for our children';
  todoList: Todo[] = [
    {
      title: '6-year-old Juan',
      content:
        '6-year-old Juan is one of millions of children living in an underserved zip code in America and doesn’t own a single book. Actually,60 percent of children from low income backgrounds are facing illiteracy and a reading gap due to living in homes without a single book.',
      color: 'red',
    },
    {
      title: '6-year-old Juan',
      content:
        '6-year-old Juan is one of millions of children living in an underserved zip code in America and doesn’t own a single book. Actually,60 percent of children from low income backgrounds are facing illiteracy and a reading gap due to living in homes without a single book.',
      color: 'blue',
    },
    {
      title: '6-year-old Juan',
      content:
        '6-year-old Juan is one of millions of children living in an underserved zip code in America and doesn’t own a single book. Actually,60 percent of children from low income backgrounds are facing illiteracy and a reading gap due to living in homes without a single book.',
      color: 'yellow',
    },
    {
      title: '6-year-old Juan',
      content:
        '6-year-old Juan is one of millions of children living in an underserved zip code in America and doesn’t own a single book. Actually,60 percent of children from low income backgrounds are facing illiteracy and a reading gap due to living in homes without a single book.',
      color: 'orange',
    },
  ];

  border_color?: string;

  constructor() {}

  onClick(color: string) {
    this.border_color = color;
    console.log(this.border_color);
  }
  ngOnInit(): void {}
}

export interface Todo {
  title: string;
  content: string;
  color: string;
}
