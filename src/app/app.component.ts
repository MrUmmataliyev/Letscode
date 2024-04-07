import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/pages/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'Letscode';
  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit(): void {
    initFlowbite();
    this.primengConfig.ripple = true;
  }
}
