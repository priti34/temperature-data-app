import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-view-data',
  standalone: true,
  imports: [],
  templateUrl: './view-data.component.html',
  styleUrl: './view-data.component.css'
})
export class ViewDataComponent implements OnInit {
  dataList: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // Subscribe to the data Observable for real-time updates
    this.dataService.data$.subscribe((data) => {
      this.dataList = data;
    });
  }
}
/**import { Component, Input, OnChanges } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnChanges {
  @Input() dataList: { datetime: string, temperature: number }[] = [];

  public chartData: ChartData<'line'> = {
    labels: this.dataList.map(data => data.datetime),
    datasets: [{
      label: 'Temperature over Time',
      data: this.dataList.map(data => data.temperature),
      fill: false,
      borderColor: 'blue',
      tension: 0.1
    }]
  };

  public chartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day'
        }
      },
      y: {
        min: -50,
        max: 50
      }
    }
  };

  ngOnChanges() {
    this.chartData.labels = this.dataList.map(data => data.datetime);
    this.chartData.datasets[0].data = this.dataList.map(data => data.temperature);
  }
}
**/ 
