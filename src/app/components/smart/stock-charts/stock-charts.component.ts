import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import 'nvd3';

@Component({
  selector: 'app-stock-charts',
  templateUrl: './stock-charts.component.html',
  styleUrls: ['./stock-charts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StockChartsComponent implements OnInit, AfterContentInit {
  @ViewChild('nvd3') public nvd3;
  public data: any = sinAndCos();
  public options: Object;

  ngOnInit() {
    this.options = {
      chart: {
        type: 'linePlusBarChart',
        height: 500,
        margin: {
          top: 30,
          right: 75,
          bottom: 50,
          left: 75
        },
        color: ['#2ca02c',],
        x: function (d, i) {
          return i
        },
        xAxis: {
          axisLabel: 'X Axis',
          tickFormat: (d) => {
            var dx = this.data[0].values[d] && this.data[0].values[d].x || 0;
            if (dx > 0) {
              return d3.time.format('%x')(new Date(dx));
            }
            return null;
          }
        },
        y2Axis: {
          axisLabel: 'Y2 Axis',
          tickFormat: (d) => {
            return '$' + d3.format(',.2f')(d)
          }
        },
      }
    };
  }

  ngAfterContentInit() {

    setInterval(() => {
      const val = this.data[0].values[this.data[0].values.length - 1];
      const newData = [
        {
          key: 'Cosine Wave',
          color: '#2ca02c',
          values: [...this.data[0].values, {x: Math.random() * 100, y: Math.random()}]
        }
      ];
      this.data = newData;
      this.nvd3.chart.update();
    }, 2000);
  }
}

export function sinAndCos() {
  const cos = new Array(100).fill('');
  const newCos = cos.map((item, index) => {
    return {x: index, y: .5 * Math.cos(index / 10 + 2) + Math.random() / 10};
  });

  return [
    {
      values: newCos,
      key: 'Cosine Wave',
      color: '#2ca02c'
    },
  ];
}
