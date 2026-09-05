import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';

@Component({
  selector: 'app-habilidades',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.css'
})
export class Habilidades {}