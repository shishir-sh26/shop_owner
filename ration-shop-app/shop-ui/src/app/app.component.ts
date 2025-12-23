import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ShopInfoComponent } from './components/shop-info/shop-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, InventoryComponent, ShopInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss' // Change this to match your actual filename in the sidebar
})
export class AppComponent {
  title = 'shop-ui';
}