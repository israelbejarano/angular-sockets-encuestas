import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebsocketService } from '../../services/websocket.service';


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

  constructor(private http: HttpClient, public wsService: WebsocketService) { }

  ngOnInit() {
    this.getData();
    this.escucharSocket();
  }

  getData() {
    this.http.get('http://localhost:5000/encuesta').subscribe((data: any) => {
      console.log(data);
      this.barChartData = data;
    });
  }

  escucharSocket() {
    this.wsService.listen('cambio-encuesta').subscribe((data: any) => {
      console.log('socket', data);
      this.barChartData = data;
    });
  }

}
