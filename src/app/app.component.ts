import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewDataComponent } from './components/view-data/view-data.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ViewDataComponent,AddDataComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'temperature-data-app';
  currentView: string = 'add'; // Default view

  // Method to switch between views
  setView(view: string) {
    this.currentView = view;
  }
}

