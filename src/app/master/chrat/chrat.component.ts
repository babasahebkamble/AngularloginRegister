import { Component } from '@angular/core';
import {Chart} from 'chart.js/auto';
import { registerables } from 'chart.js';
import{ServicelocationService}from '../../../dataService/location/servicelocation.service';

@Component({
  selector: 'app-chrat',
  templateUrl: './chrat.component.html',
  styleUrls: ['./chrat.component.css']
})
export class ChratComponent {
  apiData:any;

  constructor( private lService:ServicelocationService,) {}

  ngOnInit() {
    this.getlocationList();
    this.createChart();
 }
 getlocationList()
 {   
   console.log(" in getLr function")
    this.lService.getlocationList().subscribe({
    next: (res) => {
     this.apiData = res;
     //this.dataSource = res;
     //this.dataSource.sort = this.sort;      
    //this.dataSource.paginator = this.paginator;
    const apiData = {
     locatiodId: res.locatiodId.values,
    
   };
   


    console.log(" API Data============>"+apiData.locatiodId);
    // Patch API data to the form
  
    },
  error: console.log,
   });
   
 // form handeling
 
 }
 createChart()
  {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['Apr','May', 'June', 'July', 'Agust', 'Sep','Oct','Nov','Dec','Jan','Feb','March'],
          datasets: [{
              label: '# Intransit',
              data: [12, 19, 3, 5, 28, 12,6,0,0,0,0,0,],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }
}
