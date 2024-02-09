import { Component,inject } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbCollapse,
  CommonModule],
  templateUrl: './header.component.html'
  ,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isCollapsed = true;
}
