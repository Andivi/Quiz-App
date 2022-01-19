import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
categories = [
  {
    id: 1,
    name: "Linux",
    description: "Non-commercial Open source"
  },
  {
    id: 2,
    name: "DevOps",
    description: "Hosting and deployment"
  },
  {
    id: 3,
    name: "Networking",
    description: "OSI / TCP "
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
