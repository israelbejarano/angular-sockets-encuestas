import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { HttpClientModule } from '@angular/common/http';

const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };

import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    EncuestaComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
