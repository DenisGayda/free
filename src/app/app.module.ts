import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RightPanelComponent } from './components/smart/right-panel/right-panel.component';
import { HeaderComponent } from './components/smart/header/header.component';
import { LeftPanelComponent } from './components/smart/left-panel/left-panel.component';
import { StockChartsComponent } from './components/smart/stock-charts/stock-charts.component';
import { HistoryPanelComponent } from './components/smart/history-panel/history-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    RightPanelComponent,
    HeaderComponent,
    LeftPanelComponent,
    StockChartsComponent,
    HistoryPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
