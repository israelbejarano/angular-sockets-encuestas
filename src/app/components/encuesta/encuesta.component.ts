import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styles: []
})
export class EncuestaComponent implements OnInit {

  public barChartOptions: any = {
    responsive: true,
    scaleShowVerticalLines: false
  };

  public barChartLabels: string[] = ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4'];
  public barChartType = 'bar';

  public barChartData: any[] = [
    {data: [ 65, 59, 80, 81 ], label: 'Entrevistados'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
