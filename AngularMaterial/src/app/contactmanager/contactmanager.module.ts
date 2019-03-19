import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConatctmanagerAppComponent } from './conatctmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: ConatctmanagerAppComponent, children: [
    { path: '', component: MainContentComponent }
  ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [ConatctmanagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactmanagerModule { }
