import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MotologyDemo';
  data: any;
  dataDough:any;

  constructor() {

    this.dataDough = {
      datasets: [{
        data: [
          11,
          16,
          7,
          3

        ],
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED"],
        label: 'My dataset'
      }],
      labels: [
        "Test Drive",
        "Home Demo",
        "Best Price Offer",
        "General Inquire"
      ]
    }


    this.data = {
      labels: ['Active','Sold','InActive'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#4BC0C0",
            "#36A2EB",
            "#0604D6"
          ],
          hoverBackgroundColor: [
            "#4BC0C0",
            "#36A2EB",
            "#0604D6"
          ]
        }]
    };
    this.images = [];
    this.images.push({source:"https://motorgy.s3.eu-central-1.amazonaws.com/202079131226964964.png", thumbnail: '/assets/car.png', title:'2020 GMC Carrying plus'});
  }
  value: Date;

  images: any[];

}
