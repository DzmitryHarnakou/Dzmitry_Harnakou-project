import { Component, OnInit, Input } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  faCheck = faCheck;

  labels = [
    {text:"Action", value: false},
    {text:"Adventure", value: false},
    {text:"Thriller", value: false},
    {text:"Comedy", value: false},
    {text:"Fantasy", value: false},
    {text:"Drama", value: false},
    {text:"Horor", value: false},
    {text:"Criminal", value: false},
    {text:"War", value: false},
    {text:"Documentary", value: false},
  ]

  constructor() { }

  ngOnInit() {
  }

}
