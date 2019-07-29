import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Array<any> = [
    {
      name: 'Divisas',
      link: '/divisas'
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  openView(menu) {
    this.router.navigate([menu]);
  }

}
