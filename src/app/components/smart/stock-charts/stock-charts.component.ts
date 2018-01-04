import { Component, OnInit } from '@angular/core';
declare var TradingView;

@Component({
  selector: 'app-stock-charts',
  templateUrl: './stock-charts.component.html',
  styleUrls: ['./stock-charts.component.scss']
})
export class StockChartsComponent implements OnInit {

  ngOnInit() {
    new TradingView.widget({
      'container_id': 'technical-analysis',
      'autosize': true,
      'symbol': 'BITSTAMP:BTCUSD',
      'interval': 'D',
      'timezone': 'Etc/UTC',
      'theme': 'Dark',
      'style': '1',
      'locale': 'en',
      'toolbar_bg': 'rgba(28, 69, 135, 1)',
      'enable_publishing': false,
      'withdateranges': true,
      'hide_side_toolbar': false,
      'allow_symbol_change': true,
      'hideideas': true
    });
  }
}

