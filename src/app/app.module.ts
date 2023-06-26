import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { NavColumnComponent } from './nav-column/nav-column.component';
import { TaskPaneComponent } from './task-pane/task-pane.component';
import { DbSectionComponent } from './db-section/db-section.component';
import { DbContentWrapperComponent } from './db-content-wrapper/db-content-wrapper.component';

const routes: Routes = [
  // { path: '', component: DbSectionComponent},
  // Other routes if any
];

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    NavColumnComponent,
    TaskPaneComponent,
    DbSectionComponent,
    DbContentWrapperComponent
],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }