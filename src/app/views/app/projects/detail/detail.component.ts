import { Component, OnInit } from '@angular/core';
import { areaChartData, smallChartData1, smallChartData2, smallChartData3, smallChartData4 } from '@delegation/data/charts';

import { ChartService } from '@delegation/components/charts/chart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  chartDataConfig: ChartService;
  smallChartData1 = smallChartData1;
  smallChartData2 = smallChartData2;
  smallChartData3 = smallChartData3;
  smallChartData4 = smallChartData4;
  areaChartData = areaChartData;

  constructor(private chartService: ChartService) {
    this.chartDataConfig = this.chartService;
  }

  ngOnInit() {
  }

}
