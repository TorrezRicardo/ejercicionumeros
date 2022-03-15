import { Component, OnInit } from '@angular/core';
import { Numeros } from '@app/models/Numeros';
import { NumerosService } from '@app/services/numeros.service';
//import { error } from 'console';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  constructor(private quoteService: QuoteService,
              private _numerosService: NumerosService) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }

  val1!: number;
  condicion!: number;
  //myArray!: string [] ;
  myArray: number[] = [];

  operacion() {
    
    this.myArray = [];
    for (this.condicion = 3; this.condicion <= 7; this.condicion = this.condicion + 2) {
      console.log('entro al for' + this.condicion);
      if (this.val1 % this.condicion == 0) {
        console.log(this.condicion);
        //this.myArray.push(this.condicion);
        this.myArray.push(this.condicion);

        const NUMEROS: Numeros ={
          numeroBuscado: this.val1,
          multiploNumero: this.condicion,
        }

        console.log(NUMEROS);

        this._numerosService.guardarNumeros(NUMEROS).then(() => { 
          console.log('numero guardado')
        }), (error: any) => {
          console.log(error);
        }
      }
    }

   
    console.log(this.myArray);
    //this.rta = "el resultado es" + this.val1.toString() ;
  }

  /*retornarColor(){
    if(this.myArray[0] == 3){
      return '#FF0000';
    } else if (this.myArray[0] ==5){
      return '#FFFF00';
    } else {
      return '#4F40EB';
    }
  }*/

  retornarColor() {
    if (this.myArray[0] == 3) {
      return ' #00FF00';
    } else if (this.myArray[0] == 5) {
      return '#FF0000';
    } else {
      return '#0000FF';
    }
  }
}
