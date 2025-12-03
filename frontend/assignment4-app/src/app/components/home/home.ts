import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Body } from '../body/body';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Header, Body],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
