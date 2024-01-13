import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './component/list/list.component';
import { DetailComponent } from './component/detail/detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatListModule} from '@angular/material/list'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button'; 
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/base/card/card.component';
import { GridComponent } from './component/base/grid/grid.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ProgressSpinnerComponent } from './component/base/progress-spinner/progress-spinner.component'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {  MatDialogModule } from '@angular/material/dialog';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TrucanteTextPipe } from './pipes/trucante-text.pipe';





@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    HomeComponent,
    CardComponent,
    GridComponent,
    ProgressSpinnerComponent,
    TrucanteTextPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule,
    MatTabsModule, 
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
