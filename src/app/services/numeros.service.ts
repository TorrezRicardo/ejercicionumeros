import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Numeros } from "@app/models/Numeros";

@Injectable({
    providedIn: 'root'
})
export class NumerosService{
    constructor(private firebase: AngularFirestore){}

    guardarNumeros(numeros: Numeros): Promise<any>{
        return this.firebase.collection('tarjetas').add(numeros);
    }
}
